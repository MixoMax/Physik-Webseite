from fastapi import FastAPI, Request
from fastapi.responses import FileResponse
import uvicorn

from classes import Event

import os
import time

# project_folder/src/backend/main.py

#choose project_folder as working dir
os.chdir(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
print(os.getcwd())

app = FastAPI()

class RateLimit:
    __requests: dict[str, list[int]] #ip_address: [timestamp, timestamp, ...]
    __requests_per_second: int = 10

    def __init__(self):
        self.__requests = {}
    
    def check_rate_limit(self, ip_address: str) -> bool:
        if ip_address not in self.__requests:
            return False

        requests_in_last_second = 0
        curr_time = time.time()
        for timestamp in self.__requests[ip_address]:
            if curr_time - timestamp < 1:
                requests_in_last_second += 1
            
        return requests_in_last_second >= self.__requests_per_second
    
    def add_request(self, ip_address: str):
        if ip_address not in self.__requests:
            self.__requests[ip_address] = []
        
        self.__requests[ip_address].append(time.time())
        self.__requests[ip_address] = [timestamp for timestamp in self.__requests[ip_address] if time.time() - timestamp < 1]


rate_limit = RateLimit()

def get_error_file_path(error_code: int):

    file_path = "./src/frontend/html/"
    if os.path.exists(f"{file_path}{error_code}.html"):
        return f"{file_path}{error_code}.html"
    else:
        return f"{file_path}404.html"

@app.get("/error/{status_code}")
async def error(status_code: int):
    file_path = get_error_file_path(status_code)
    return FileResponse(file_path)



@app.get("/static/{file_path:path}")
async def serve_static(file_path: str, request: Request):
    error_code = 200
    
    ip_address = request.client.host

    rate_limit.add_request(ip_address)

    if rate_limit.check_rate_limit(ip_address):
        error_code = 429
        return FileResponse(get_error_file_path(error_code), status_code=error_code)
    


    fp = f"./src/frontend/build/static/{file_path}"
    
    if not os.path.exists(fp):
        error_code = 404

    if error_code != 200:
        fp = get_error_file_path(error_code)

    return FileResponse(fp, status_code=error_code)

@app.get("/assets/{file_path:path}")
async def serve_assets(file_path: str, request: Request):
    error_code = 200
    
    ip_address = request.client.host

    rate_limit.add_request(ip_address)

    if rate_limit.check_rate_limit(ip_address):
        error_code = 429
        return FileResponse(get_error_file_path(error_code), status_code=error_code)
        
    
    

    fp = f"./src/frontend/assets/{file_path}"
    
    if not os.path.exists(fp):
        error_code = 404

    if error_code != 200:
        fp = get_error_file_path(error_code)

    return FileResponse(fp, status_code=error_code)



@app.get("/{file_path:path}")
async def serve_root(file_path: str, request: Request):
    error_code = 200
    
    ip_address = request.client.host

    rate_limit.add_request(ip_address)

    if rate_limit.check_rate_limit(ip_address):
        error_code = 429
        return FileResponse(get_error_file_path(error_code), status_code=error_code)
        
    
    

    if file_path == "":
        file_path = "index.html"
    fp = f"./src/frontend/build/{file_path}"
    
    if not os.path.exists(fp):
        error_code = 404

    if error_code != 200:
        fp = get_error_file_path(error_code)

    return FileResponse(fp, status_code=error_code)
    

uvicorn.run(app, host="0.0.0.0", port=8000)