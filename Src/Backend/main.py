from fastapi import FastAPI
from fastapi.responses import FileResponse
import uvicorn

from classes import Event

import os

# project_folder/src/backend/main.py

#choose project_folder as working dir
os.chdir(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
print(os.getcwd())

app = FastAPI()


@app.get("/{file_path:path}")
async def serve_root(file_path: str):
    if file_path == "":
        file_path = "index.html"
    fp = f"./Src/Frontend/build/{file_path}"
    return FileResponse(fp)

@app.get("/static/{file_path:path}")
async def serve_static(file_path: str):
    fp = f"./Src/Frontend/build/static/{file_path}"
    return FileResponse(fp)

    

uvicorn.run(app, host="0.0.0.0", port=8000)