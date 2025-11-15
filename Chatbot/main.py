from fastapi import FastAPI, UploadFile, Form, File
from typing import List
from fastapi.responses import FileResponse
import faiss
import pickle
from pydantic import BaseModel
import google.generativeai as genai
import google.generativeai.types as genai_types
from typing import List
import os
from sentence_transformers import SentenceTransformer
import uuid
import util

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = FastAPI()

BASE_DIR = "labs"
STATIC_DIR = "static"

EMBED_MODEL = SentenceTransformer("all-mpnet-base-v2")
INDEX_PATH = "faiss_index.bin"
METADATA_PATH = "faiss_metadata.pkl"

# prepend system instruction manually
SYSTEM_PROMPT = """You are a helpful chatbot of Korea University. 
Your work is to find relevant information for students. Answer with short and concise manner."""


class ChatGeneralRequest(BaseModel):
    lab_id: str
    question: str


class ChatJobRequest(BaseModel):
    lab_id: str
    question: str
    job_info: str
    user_info: str


@app.get("/")
async def read_index():
    """Serves the index.html file."""
    return FileResponse(os.path.join(STATIC_DIR, "index.html"))


@app.post("/create_embedding")
async def create_embedding(
    lab_id: str = Form(...),
    lab_intro: str = Form(...),
    pdf_files: List[UploadFile] = File(...),
):
    print(f"Creating embedding for lab: {lab_id}")
    print(f"Number of PDF files: {len(pdf_files)}")

    # prepare paths
    lab_path = os.path.join(BASE_DIR, lab_id)
    papers_path = os.path.join(lab_path, "papers")
    os.makedirs(lab_path, exist_ok=True)
    index_path = os.path.join(lab_path, INDEX_PATH)
    metadata_path = os.path.join(lab_path, METADATA_PATH)

    # save PDFs
    util.save_pdfs(pdf_files, papers_path)

    # init index & metadata
    dim = EMBED_MODEL.get_sentence_embedding_dimension()
    index = faiss.IndexFlatL2(dim)
    metadata = []

    # injest lab intro
    intro_emb = EMBED_MODEL.encode(lab_intro)
    index.add(intro_emb.reshape(1, -1))
    metadata.append(
        {
            "id": str(uuid.uuid4()),
            "source": "lab_intro",
            "page": 0,
            "chunk_index": 0,
            "text": lab_intro,
        }
    )

    # ingest PDFs
    for f in os.listdir(papers_path):
        if f.lower().endswith(".pdf"):
            util.ingest_pdf(os.path.join(papers_path, f), index, metadata)

    # save index & metadata
    faiss.write_index(index, index_path)
    with open(metadata_path, "wb") as fh:
        pickle.dump(metadata, fh)
    print("Ingest complete")

    return {"status": "ok", "lab_id": lab_id, "chunks": len(metadata)}


def load_lab_index(lab_id: str):
    lab_path = os.path.join(BASE_DIR, lab_id)
    index_path = os.path.join(lab_path, INDEX_PATH)
    metadata_path = os.path.join(lab_path, METADATA_PATH)

    index = faiss.read_index(index_path)
    with open(metadata_path, "rb") as fh:
        metadata = pickle.load(fh)
    return index, metadata


# --- Retrieval ---
def retrieve(index, metadata, query: str, top_k=10):
    qv = EMBED_MODEL.encode(query).reshape(1, -1)
    D, I = index.search(qv, top_k)
    return [metadata[i] for i in I[0] if i >= 0]


# --- Prompt builder for two modes ---
def build_prompt(
    contexts: List[dict], question: str, mode, job_info=None, user_info=None
):
    header = (
        "You are an assistant that answers using only the provided sources. "
        "Cite the source filename and page when available. If answer cannot be found, say you don't know.",
    )
    ctx = "\n\n".join(
        [f"SOURCE: {c['source']} (page {c['page']})\n{c['text']}" for c in contexts]
    )

    footer = "\nAnswer succinctly, then list sources."

    if mode == "general":
        return f"{header}LAB CONTEXT:{ctx}QUESTION: {question}{footer}"
    if mode == "job":
        return f"{header}LAB CONTEXT:{ctx}JOB INFO:{job_info}USER INFO:{user_info}QUESTION: {question}{footer}"


# --- Lab Q&A ---
@app.post("/chat_general")
async def chat_general(request: ChatGeneralRequest):
    index, metadata = load_lab_index(request.lab_id)
    results = retrieve(index, metadata, request.question)
    prompt = build_prompt(results, request.question, mode="general")

    full_prompt = f"{SYSTEM_PROMPT}\n\nUser question:\n{prompt}"
    model = genai.GenerativeModel("models/gemini-2.5-flash")
    resp = model.generate_content(
        full_prompt,
        generation_config=genai_types.GenerationConfig(max_output_tokens=1024),
    )
    return {"answer": resp.text }


# --- Job Q&A ---
@app.post("/chat_job")
async def chat_job(request: ChatJobRequest):
    index, metadata = load_lab_index(request.lab_id)
    results = retrieve(index, metadata, request.question)
    prompt = build_prompt(
        results,
        request.question,
        mode="job",
        job_info=request.job_info,
        user_info=request.user_info,
    )

    full_prompt = f"{SYSTEM_PROMPT}\n\nUser question:\n{prompt}"
    model = genai.GenerativeModel("models/gemini-2.5-flash")
    resp = model.generate_content(
        full_prompt,
        generation_config=genai_types.GenerationConfig(max_output_tokens=1024),
    )
    return {"answer": resp.text }
