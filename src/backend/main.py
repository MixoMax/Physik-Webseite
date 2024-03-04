from fastapi import FastAPI, Request
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from classes import Event, DB, Filter
from scraper import scrape_data

import os
import subprocess
import time
import datetime

# project_folder/src/backend/main.py

#choose project_folder as working dir
os.chdir(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
print(os.getcwd())

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

db = DB()

class RateLimit:
    __requests: dict[str, list[int]] #ip_address: [timestamp, timestamp, ...]
    __requests_per_second: int = 1e100

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


def get_human_readable_time() -> str:
    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")


last_scrape = get_human_readable_time()
last_webhook = get_human_readable_time()


@app.get("/error/{status_code}")
async def error(status_code: int):
    file_path = get_error_file_path(status_code)
    return FileResponse(file_path)


@app.get("/search")
async def search(q: str, request: Request, date: str = "") -> JSONResponse:
    error_code = 200

    ip_address = request.client.host

    rate_limit.add_request(ip_address)

    if rate_limit.check_rate_limit(ip_address):
        error_code = 429
        return JSONResponse({"error": "429 - Too many requests", "message": "You are sending too many requests! If you are a bot, please slow down. If you are a human and believe this is a mistake, contact me: <linus@linushorn.dev>."}, status_code=error_code)

    events = db.get_events()

    events_out: list[Event] = []

    for event in events:
        if any(q in str(val) for key, val in event.__dict__.items()):
            events_out.append(event)
    
    # date is in format "YYYY-MM-DD"
    events = events_out
    events_out = []
    if date != "":
        for event in events:
            if event.date == date:
                events_out.append(event)
            else:
                print(event.date, date)
    else:
        events_out = events

    
    json_out = []

    for event in events_out:
        json_out.append(event.to_json())
    
    
    return JSONResponse(json_out, status_code=error_code)


@app.get("/scrape_events")
async def scrape_events() -> JSONResponse:
    t_start = time.time()

    events = scrape_data()
    
    db.reset()
    
    for event in events:
        db.add_event(event)

    last_scrape = get_human_readable_time()
    
    return JSONResponse({"message": "Scraped events and added to database", "time_taken": time.time() - t_start, "events_added": len(events)})


@app.post("/filter_events")
async def filter_events(request: Request) -> JSONResponse:
    error_code = 200

    ip_address = request.client.host

    rate_limit.add_request(ip_address)

    if rate_limit.check_rate_limit(ip_address):
        error_code = 429
        return JSONResponse({"error": "429 - Too many requests", "message": "You are sending too many requests! If you are a bot, please slow down. If you are a human and believe this is a mistake, contact me: <linus@linushorn.dev>."}, status_code=error_code)
    
    data = await request.json()

    # data ->
    # [
    #       {     
    #       "mode": "AND" | "OR" | float,
    #       },
    #       "filters": [
    #           filter_json,
    #           filter_json,
    #           ...
    #       ]}
    # ]

    filters = []
    for filter_json in data["filters"]:
        
        filters.append(Filter(filter_json["key"], filter_json["value_s"], filter_json["comparison_mode"]))

    mode = data["mode"]

    events = db.get_events_filtered(filters, mode)

    json_out = []
    for event in events:
        json_out.append(event.to_json())
    
    return JSONResponse(json_out, status_code=error_code)



@app.post("/github_webhook")
async def github_webhook(request: Request) -> JSONResponse:
    data = await request.json()
    print(data)
    
    commands = [
        "git reset --hard HEAD",
        "git fetch && git pull",
        "cd ~/Physik-Webseite/src/frontend"
        "npm run build"
    ]

    for command in commands:
        print(f"Executing command: {command}")
        subprocess.run(command, shell=True)
    
    last_webhook = get_human_readable_time()

    return JSONResponse({"message": "Received webhook"})

@app.get("/last_update")
async def last_update() -> JSONResponse:
    return JSONResponse({"last_scrape": last_scrape, "last_webhook": last_webhook})




# Wildcard route to serve all files from the frontend
# at the very bottom, else it would override all other routes


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




<<<<<<< HEAD
uvicorn.run(app, host="0.0.0.0", port=80)
=======
uvicorn.run(app, host="0.0.0.0", port=1890)
>>>>>>> 7e5128f4f53dce35d1b496cf51d66871fa4acb03
