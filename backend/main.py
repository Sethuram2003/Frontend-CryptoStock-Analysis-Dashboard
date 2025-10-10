from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/data")
def get_data():
    return {"message": "Hello from FastAPI!", "status": "success"}
