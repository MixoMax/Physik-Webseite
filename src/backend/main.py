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
    fp = f"./src/frontend/build/{file_path}"
    
    if not os.path.exists(fp):
        fp = get_error_file_path(404)

    return FileResponse(fp)

@app.get("/static/{file_path:path}")
async def serve_static(file_path: str):
    fp = f"./src/frontend/build/static/{file_path}"
    
    if not os.path.exists(fp):
        fp = get_error_file_path(404)

    return FileResponse(fp)

@app.get("/error/{status_code}")
async def error(status_code: int):
    file_path = get_error_file_path(status_code)
    return FileResponse(file_path)

def get_error_file_path(error_code: int):
    file_path = "./src/frontend/html/"
    if os.path.exists(f"{file_path}{error_code}.html"):
        return f"{file_path}{error_code}.html"
    else:
        return f"{file_path}404.html"
    


    

uvicorn.run(app, host="0.0.0.0", port=8000)