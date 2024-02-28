import sqlite3
import os

w_dir = os.path.dirname(__file__)

class Event:
    # Event class to store event data
    # for Events at the Planetarium Hamburg
    
    title: str      #
    date: str       #YYYY-MM-DD
    weekday: str    #3 letter abbreviations in German
    time:str        #HH:MM
    location: str   #

    description: str
    price_normal: int
    price_reduced: int
    duration: int   #in Minutes
    recommended_age: int    #years

    def __init__(self) -> None:
        pass
        

    def from_json(self, json_dict) -> "Event":
        attrs = [
            "title",
            "date",
            "weekday",
            "time",
            "location",
            "description",
            "price_normal",
            "price_reduced",
            "duration",
            "recommended_age"
        ]

        for key, value in json_dict.items():
            if key in attrs:
                setattr(self, key, value)
        
        for key in attrs:
            if not hasattr(self, key):
                setattr(self, key, "")
        
        self.date = self.date.replace(".", "-")

        return self
    
    def to_json(self) -> dict:
        #return {
        #    "title": self.title,
        #    "date": self.date,
        #    "weekday": self.weekday,
        #    "time": self.time,
        #    "location": self.location,
        #    "description": self.description,
        #    "price_normal": self.price_normal,
        #    "price_reduced": self.price_reduced,
        #    "duration": self.duration,
        #    "recommended_age": self.recommended_age
        #}

        json_out = {}

        for key in ["title", "date", "weekday", "time", "location", "description", "price_normal", "price_reduced", "duration", "recommended_age"]:
            try:
                val = getattr(self, key)
            except:
                val = ""
            
            json_out[key] = val
        
        return json_out

    def clean(self):
        y, m, d = self.date.split("-")
        if len(d) == 4:
            # ymd is reversed
            y, d = d, y
        self.date = f"{y}-{m}-{d}"

        
        
        

    def __str__(self) -> str:
        return f"{self.title} ({self.date} {self.time})"


class Filter:
    # Filter object class
    key: str
    value_s: tuple[int | float] | int | float | str
    comparison_mode: str    #eq, gte, lte, gt, lt, in, nin

    def __init__(self, key: str, values: tuple[int | float] | int | float | str, comparison_mode: str) -> None:
        self.key = key
        self.value_s = values
        self.comparison_mode = comparison_mode

        if comparison_mode not in ["eq", "gte", "lte", "gt", "lt", "in", "nin", "in_between"]:
            raise ValueError("Invalid comparison mode")

    
    def __str__(self) -> str:
        return f"{self.key} {self.comparison_mode} {self.value_s}"
    
    def check(self, event: Event) -> bool:
        value = getattr(event, self.key)
        
        is_valid = False
        try:
            match self.comparison_mode:
                case "eq": is_valid = value == self.value_s
                case "gte": is_valid = value >= self.value_s
                case "lte": is_valid = value <= self.value_s
                case "gt": is_valid = value > self.value_s
                case "lt": is_valid = value < self.value_s
                case "in": is_valid = value in self.value_s
                case "nin": is_valid = value not in self.value_s
                case "in_between": is_valid = min(self.value_s) <= value <= max(self.value_s)
        except:
            is_valid = False
        
        
        return is_valid
        



class DB:
    def __init__(self) -> None:
        self.conn = sqlite3.connect(f"{w_dir}/events.db")
        self.cursor = self.conn.cursor()
        
        cmd = """
        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            date TEXT,
            weekday TEXT,
            time TEXT,
            location TEXT,
            description TEXT,
            price_normal INTEGER,
            price_reduced INTEGER,
            duration INTEGER,
            recommended_age INTEGER
        )
        """
        self.cursor.execute(cmd)
        self.conn.commit()
    
    def add_event(self, event: Event) -> None:
        cmd = """
        INSERT INTO events (
            title,
            date,
            weekday,
            time,
            location,
            description,
            price_normal,
            price_reduced,
            duration,
            recommended_age
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """
        self.cursor.execute(cmd, (
            list(event.to_json().values())
        ))
        self.conn.commit()
    
    def get_events(self) -> list[Event]:
        cmd = "SELECT * FROM events"
        self.cursor.execute(cmd)
        rows = self.cursor.fetchall()

        print(len(rows))

        events = []
        for row in rows:
            event = Event()
            event.title = row[1]
            event.date = row[2].replace(".", "-")
            event.weekday = row[3]
            event.time = row[4]
            event.location = row[5]
            event.description = row[6]
            event.price_normal = row[7]
            event.price_reduced = row[8]
            event.duration = row[9]
            event.recommended_age = row[10]
            event.clean()
            events.append(event)
        
        return events

    def get_events_filtered(self, filters: list[Filter], mode: str = "AND") -> list[Event]:
        """ Get events filtered by custom set filters.

        params:
            filters: list of filters to apply
            mode: "AND" or "OR" to combine filters or float (percentage of filters that need to match)
        
        returns:
            list of events that match the filters
        """
        
        if mode not in ["AND", "OR"] and type(mode) != float:
            raise ValueError("Invalid mode")

        events = self.get_events()
        filtered = []

        for event in events:
            matches = 0
            for filter in filters:
                if filter.check(event):
                    matches += 1
            
            if mode == "AND":
                # all filters need to match
                if matches == len(filters):
                    filtered.append(event)
            
            elif mode == "OR":
                # at least one filter needs to match
                if matches > 0:
                    filtered.append(event)
            
            elif type(mode) == float:
                # percentage of filters that need to match
                if matches / len(filters) >= mode:
                    filtered.append(event)
        
        return filtered

    def reset(self) -> None:
        cmd = "DELETE FROM events"
        self.cursor.execute(cmd)
        self.conn.commit()

    def close(self):
        self.conn.close()

events = DB().get_events()