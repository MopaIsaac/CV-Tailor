from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import AnalyseRequest, AnalyseResponse
from claude import analyse_cv
from dotenv import load_dotenv

load_dotenv()
import os
print("API KEY:", os.getenv("ANTHROPIC_API_KEY"))
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001", "http://localhost:3000", "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyse", response_model=AnalyseResponse)
def analyse(request: AnalyseRequest):
    result = analyse_cv(request.cv_text, request.job_description)
    return result