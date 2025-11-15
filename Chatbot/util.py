import os
import pdfplumber
from sentence_transformers import SentenceTransformer
import uuid

EMBED_MODEL = SentenceTransformer("all-mpnet-base-v2")

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
    with pdfplumber.open(filepath) as pdf:
        for i, p in enumerate(pdf.pages):
            text = p.extract_text() or ""
            pages.append((i + 1, text))
    return pages


def ingest_pdf(filepath, index, metadata):
    pages = extract_pdf(filepath)
    filename = os.path.basename(filepath)
    for page_num, text in pages:
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
