

class Event:
    # Event class to store event data
    # for Events at the Planetarium Hamburg
    
    name: str
    description: str
    date: str # format: "YYYY-MM-DD HH:MM"
    duration: int # in minutes
    price: tuple[float, float] # (regular, reduced (eg. students)) in €
    recommended_age: int
    languages: list[str] # ["de", "en", ...]
    is_3d: bool
    image_url: str
    
    def from_json(self, json: dict):
        self.name = json["name"]
        self.description = json["description"]
        self.date = json["date"]
        self.duration = json["duration"]
        self.price = (json["price"]["regular"], json["price"]["reduced"])
        self.recommended_age = json["recommended_age"]
        self.languages = json["languages"]
        self.is_3d = json["is_3d"]
        self.image_url = json["image_url"]
    
    def to_json(self) -> dict:
        return {
            "name": self.name,
            "description": self.description,
            "date": self.date,
            "duration": self.duration,
            "price": {
                "regular": self.price[0],
                "reduced": self.price[1]
            },
            "recommended_age": self.recommended_age,
            "languages": self.languages,
            "is_3d": self.is_3d,
            "image_url": self.image_url
        }