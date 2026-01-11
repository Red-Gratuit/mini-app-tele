from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()

app.mount("/", StaticFiles(directory=".", html=True), name="static")

@app.get("/")
def root():
    return FileResponse("index.html")
