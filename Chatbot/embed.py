import os
import pdfplumber
from sentence_transformers import SentenceTransformer
import uuid
import faiss
import pickle
from typing import List

EMBED_MODEL = SentenceTransformer("all-mpnet-base-v2")

BASE_DIR = "labs"
INDEX_PATH = "faiss_index.bin"
METADATA_PATH = "faiss_metadata.pkl"
INTRO_PATH = "intro.txt"
PAPERS_DIR = "papers"


def split_text(text, chunk_words=400, overlap_words=50):
    words = text.split()
    chunks = []
    i = 0
    while i < len(words):
        chunk = " ".join(words[i : i + chunk_words])
        chunks.append(chunk)
        i += chunk_words - overlap_words
    return chunks


def extract_pdf(filepath: str) -> list[tuple[int, str]]:
    pages: list[tuple[int, str]] = []
    try:
        with pdfplumber.open(filepath) as pdf:
            for i, p in enumerate(pdf.pages):
                text = p.extract_text() or ""
                pages.append((i + 1, text))
    except Exception as e:
        print(f"Error extracting PDF {filepath}: {e}")
    return pages


def ingest_pdf(filepath, index, metadata):
    print(f"Ingesting PDF: {filepath}")
    pages = extract_pdf(filepath)
    filename = os.path.basename(filepath)
    for page_num, text in pages:
        try:
            if not text.strip():
                continue
            chunks = split_text(text)
            for j, chunk in enumerate(chunks):
                emb = EMBED_MODEL.encode(chunk)
                vec_id = str(uuid.uuid4())
                index.add(emb.reshape(1, -1))
                metadata.append(
                    {
                        "id": vec_id,
                        "source": filename,
                        "page": page_num,
                        "chunk_index": j,
                        "text": chunk[:2000],
                    }
                )
        except Exception as e:
            print(f"Error processing page {page_num} of {filename}: {e}")


def save_pdfs(pdf_files, save_dir):
    # ensure directory exists
    os.makedirs(save_dir, exist_ok=True)

    # clear directory
    for f in os.listdir(save_dir):
        os.remove(os.path.join(save_dir, f))

    # save new PDFs
    for pf in pdf_files:
        filepath = os.path.join(save_dir, pf.filename)
        with open(filepath, "wb") as out:
            out.write(pf.file.read())


def create_embedding(lab_id: str):
    print(f"Creating embedding for lab: {lab_id}")

    # prepare paths
    lab_path = os.path.join(BASE_DIR, lab_id)
    papers_path = os.path.join(lab_path, PAPERS_DIR)
    intro_path = os.path.join(lab_path, INTRO_PATH)
    index_path = os.path.join(lab_path, INDEX_PATH)
    metadata_path = os.path.join(lab_path, METADATA_PATH)

    # init index & metadata
    dim = EMBED_MODEL.get_sentence_embedding_dimension()
    index = faiss.IndexFlatL2(dim)
    metadata = []

    # injest lab intro
    with open(intro_path, "r", encoding="utf-8") as f:
        lab_intro = f.read()
    intro_emb = EMBED_MODEL.encode(lab_intro)
    index.add(intro_emb.reshape(1, -1))
    metadata.append(
        {
            "id": str(uuid.uuid4()),
            "source": "Introduction",
            "page": 0,
            "chunk_index": 0,
            "text": lab_intro,
        }
    )

    # ingest PDFs
    for f in os.listdir(papers_path):
        if f.lower().endswith(".pdf"):
            ingest_pdf(os.path.join(papers_path, f), index, metadata)

    # save index & metadata
    faiss.write_index(index, index_path)
    with open(metadata_path, "wb") as fh:
        pickle.dump(metadata, fh)
    print("Ingest complete")


def load_lab_index(lab_id: str):
    lab_path = os.path.join(BASE_DIR, lab_id)
    index_path = os.path.join(lab_path, INDEX_PATH)
    metadata_path = os.path.join(lab_path, METADATA_PATH)

    index = faiss.read_index(index_path)
    with open(metadata_path, "rb") as fh:
        metadata = pickle.load(fh)
    return index, metadata


def retrieve(index, metadata, query: str, top_k=10):
    qv = EMBED_MODEL.encode(query).reshape(1, -1)
    D, I = index.search(qv, top_k)
    return [metadata[i] for i in I[0] if i >= 0]


def build_prompt(
    contexts: List[dict], question: str, mode, job_info=None, user_info=None
):
    header = (
        "You are an assistant that answers using only the provided sources. "
        "Cite the source filename and page when available. If answer cannot be found, say you don't know."
        "Limit your answer to 50 words.\n\n"
    )
    ctx = "\n\n".join(
        [f"SOURCE: {c['source']} (page {c['page']})\n{c['text']}" for c in contexts]
    )

    footer = "\nAnswer succinctly, then list sources."

    if mode == "general":
        return f"{header}LAB CONTEXT:{ctx}QUESTION: {question}{footer}"
    if mode == "job":
        return f"{header}LAB CONTEXT:{ctx}JOB INFO:{job_info}USER INFO:{user_info}QUESTION: {question}{footer}"
