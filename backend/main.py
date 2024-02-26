from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model.model import data

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def get():
    return {"hello":"world"}

@app.post("/mun")
def handleFormSubmit(d: data):
    print(d)
    return {"Done"}