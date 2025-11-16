from fastapi import FastAPI
from typing import List
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
import google.generativeai.types as genai_types
from typing import List
import os
import embed
import crawl
import shutil

# prepend system instruction manually
SYSTEM_PROMPT = """You are a helpful chatbot of Korea University. 
Your work is to find relevant information for students. 
Answer with the language used in the question.
Answer with short and concise manner."""

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = FastAPI()

origins = [
    "https://in-thon-team-2.vercel.app/",
    "https://reimagined-space-giggle-qpx9gqp4j5wf5g4-3000.app.github.dev",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods
    allow_headers=["*"], # Allows all headers
)

BASE_DIR = "labs"
STATIC_DIR = "static"


class LabInfoRequest(BaseModel):
    lab_id: str
    intro_urls: List[str]
    publication_url: str


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


# --- Lab setup / download introduction and pdfs ---
@app.post("/load_lab_info")
async def load_lab_info(request: LabInfoRequest):
    print(f"Loading lab info for: {request.lab_id}")
    print(f"Intro links: {request.intro_urls}")
    print(f"Publication link: {request.publication_url}")

    # prepare paths
    lab_path = os.path.join(BASE_DIR, request.lab_id)
    intro_path = os.path.join(lab_path, "intro.txt")
    pdf_path = os.path.join(lab_path, "papers")

    # clear and create directories
    if os.path.exists(lab_path):
        shutil.rmtree(lab_path)
    os.makedirs(lab_path, exist_ok=True)
    os.makedirs(pdf_path, exist_ok=True)

    # prepare intro and pdfs
    crawl.download_intro(intro_path, request.intro_urls)
    crawl.download_pdfs_advanced(pdf_path, request.publication_url)

    return {"status": "ok", "lab_id": request.lab_id}


# --- Create embedding ---
@app.post("/create_embedding")
async def create_embedding(request: LabInfoRequest):
    print(f"Creating embedding for lab: {request.lab_id}")

    embed.create_embedding(request.lab_id)

    return {"status": "embedding created", "lab_id": request.lab_id}

# --- Lab Q&A ---
@app.post("/chat_general")
async def chat_general(request: ChatGeneralRequest):
    index, metadata = embed.load_lab_index(request.lab_id)
    results = embed.retrieve(index, metadata, request.question)
    prompt = embed.build_prompt(results, request.question, mode="general")

    full_prompt = f"{SYSTEM_PROMPT}\n\nUser question:\n{prompt}"
    model = genai.GenerativeModel("models/gemini-2.5-flash")
    resp = model.generate_content(
        full_prompt,
        generation_config=genai_types.GenerationConfig(max_output_tokens=2048),
    )
    return {"answer": resp.text}


# --- Job Q&A ---
@app.post("/chat_job")
async def chat_job(request: ChatJobRequest):
    index, metadata = embed.load_lab_index(request.lab_id)
    results = embed.retrieve(index, metadata, request.question)
    prompt = embed.build_prompt(
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
        generation_config=genai_types.GenerationConfig(max_output_tokens=2048),
    )
    return {"answer": resp.text}
