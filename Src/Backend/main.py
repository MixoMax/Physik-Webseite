from fastapi import FastAPI
from fastapi.responses import FileResponse
import uvicorn

from Src.Backend.classes import Event

import os

app = FastAPI()

@app.get("/static/{file_path:path}")
async def read_file(file_path: str):
    # serve file from static folder
    
    file_ending = file_path.split(".")[-1]
    
    file_types = {
        "image": ["png", "jpg", "jpeg", "gif", "svg", "webp"],
        "audio": ["mp3", "wav", "ogg"],
        "video": ["mp4", "webm", "ogg"],
        "text": ["html", "txt", "csv", "json", "xml", "css", "js", "md"],
        "font": ["ttf", "otf", "woff", "woff2"],
        "archive": ["zip", "tar", "gz", "bz2", "7z", "rar"],
        "document": ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx"]
    }
    
    file_type = "text"
    for category, endings in file_types.items():
        if file_ending in endings:
            file_type = category
            break
    
    MIME = f"{file_type}/{file_ending}"
    
    # sanitize file path
    # check if file exists
    if file_path.count("..") > 0 or os.path.exists(f"./static/{file_path}") is False:
        path = "./html/404.html"
        code = 404
    else:
        path = f"./static/{file_path}"
        code = 200
    
    return FileResponse(path, media_type=MIME, status_code=code)

@app.get("/{file_path:path}")
async def read_html(file_path: str):
    # serve html file from html folder
    # sanitize file path
    
    path = f"./html/{file_path}"
    if file_path.count("..") > 0 or os.path.exists(path) is False:
        path = "./html/404.html"
        error_code = 404
    else:
        error_code = 200
    
    return FileResponse(path, media_type="text/html", status_code=error_code)
    

uvicorn.run(app, host="0.0.0.0", port=8000)