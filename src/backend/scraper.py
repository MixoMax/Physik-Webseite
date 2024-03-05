import requests
import sys
import locale

from bs4 import BeautifulSoup
from tqdm import tqdm
from classes import Event, Filter, DB

requests.packages.urllib3.util.connection.HAS_IPV6 = False


def get_headers_and_cookies() -> tuple[dict, dict]:
    headers = {
        "Accept-Language": "en-US,de;q=0.5",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Host": "planetarium-hamburg.eventim-inhouse.de",
        "Pragma": "no-cache",
        "Referer": "https://planetarium-hamburg.eventim-inhouse.de/webshop/",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "same-origin",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0",
        # tell server to use utf-8
        "Accept-Charset": "utf-8",
        }

    cookies = {
        "_abck": "0A9A0316B6A3A24D1238C1B14D26C517~-1~YAAQJXvdWGMRP6SNAQAAwEXDsAsN3iftN8ALI7qy1QjQPqObR2DQkeyB8CV6tmfySmcD7MLQ8p1q9F2c3tiQoGufNswA3Ju5L7+UeHx6Wmnn0AwEoA7BGn+rr3GG34duNTwQW8EoF4HsIIeZ18UAFz/BhyecMVKiFta+y0QnyjNNNGE2RTjNbr5NcGPk9myqCFtFRe5Iih+rIVvFiwFwemB/+sYcaXkxST88+KZYjKtdI23ikS1L8/sLX9rmAH4u13fe6FJJtp3z0YRDp74WPYjXIiY4zmGbSbZHxiK6P48tTW8KOB7WwUGpbcO/iP7CVbFdfcIgsj60bS2pT1IBQ0XEb9VpZKjc0t61I9q3A/nODtJ23rOfp7kfW4gh+oMNh+XLlmzuiCKhHGQYUYGSuWLt~-1~-1~1708071203",
        "ak_bmsc": "D924247C76E45C4105AD2750BE06B7D5~000000000000000000000000000000~YAAQJXvdWBkGP6SNAQAANgvCsBa17Ah5rIiQTv8BXQYptq9xT32TJ5gFLpMaBoQemUSg0Y9j8Oym2wPBIawnNgiDUcoBPzswQD/2Rw1GKH9ghN0Ute7TUOXeZnE9Q5wkzGML5Wh6vl6jsD9SUO9ZmiSA+v11kWUDomuRYRiQIK95oESGXuU4AtSXygqsEviKgbUepF/dSELQiDWZEBlaVlMhiKaWRP4gBMPGLdaO/kETV6AvmOPGdXtqmChe5r92kuPGrcL0Adz/7cr2LwCWomzxK/QVF6aUo7eSOyx0fUh4aYWwbU1ceiIFMrF9rhXsFBNTkrhA2XxfAMxF520n6xLXKGQ7OQfGeYg9T4ttyVLrFmkVohwrFBdPpHouxGR/jSWWM1iQJhdFiwo3RH1zB6c=",
        "BIGipServer~ASP~sg_inhouse_planetarium-hamburg": "rd5o00000000000000000000ffff0ac05165o10063",
        "bm_mi": "5A6D3F02F44132787908D05660DF17C7~YAAQJXvdWGsGP6SNAQAAOxPCsBat+dfY4XhYpEkjiISYNtfrgbflx6plwX5cwY9SGPPufuQh2VEeYBSXtFkiYBLq7SUnL3z0gnRMQzMxjIQAK1GvYLsHpS0/2EOvegIaDgg5CWzEvhoIGx/cJcIXCpzRrkmfKhE3sCT/6RH72Ri0CDtRFOZ1/BxSIsJhXQexw04R3WqLNX/pSI4XvWBpCjLrPrXPLHBnJLfT4vajkGKcibVn8081rtiIa/g3xX3oB4pk7G8TxdgwV19QQJftUc0nWSA7CyODsz/iS0QvH6unX2UxQSObZnE4jHzS4+fvQ/elnzohb+7ZKTkSGQW6ZlhuA7dCW2z9WyFEkmqYX6mF~1",
        "bm_sv": "46A9F136F115FC7F326AFC6B0CC167BA~YAAQJXvdWGwGP6SNAQAAOxPCsBYnfePrc/t4W7W+lhGubSn3DU9GO0BOM9u9z4l2nCnt/0PUzBkWtaJclj2g0WAAXyrgSZR3L6YWg7rBh4vI0wEIE/Iy9cagyfrAKtshPlMMCintOBiJbS2IndubBq3+imnvsKnMM56oR7qBOZJZXxS/r9NLJqRbZiqXnDJOmz7W/z1WYZW9YBPtOUdDUfvbmQ5JRvDNk7gMGsUExEYSGq5e1QXk5wxU+maWy7E9UpFjOJ6Mm0Q=~1",
        "bm_sz": "EEAC53921DF6096419FA3722D33F614C~YAAQJXvdWG0GP6SNAQAAOxPCsBaVQ2Ry7JJmxAsfrSpVafjRaR9o/wSTbZUEMXcYKf0DQvX/p1Npx+fU8WlE+uoWTYzVWMS1KvNTZRmPhjj8Bk9FZnrYfYjwnTaufm+IxqKWCbKNizqYbBFsPIEXqQ/24lzCdXdSex0toD1wOcolwhUk/F7I8si+pFbbUju1yUEsi4mp7tGW0/gbYtBwMjf23pmnQmDk3+/grXVcErdk4qzdWEPEOwPpm/H+lPAEnPxgXFyHWydEDuGp/60KAGscEDnYLSneNGwygc3MznbPUYt9Hde57iielzZLbe41Zoagx1xSLZLRY722QiW47iIcUTmtEYinGQ7ev+wxNTeB1MWhhkk6bIlPxRvqJmzDXxPvq+9KThhYRUs=~4474166~3553328",
        "JSESSIONID": "EC04190F82889D8C9BAC752AF8838646",
        "cookieControl": "true",
        "cookieControlPrefs": "[]",
        "csrf_https-contao_csrf_token": "gt1vLb-9uob77kJexjqhUHOVJxZ7bsr9j3SvKE65EF0",
    }

    headers_new = {}
    for key, value in headers.items():
        key = key.encode("utf-8")
        value = value.encode("utf-8")
        headers_new[key] = value

    cookies_new = {}
    for key, value in cookies.items():
        key = key.encode("utf-8").decode("utf-8")
        value = value.encode("utf-8").decode("utf-8")
        cookies_new[key] = value
    
    headers_new["Cookie"] = "; ".join([f"{key}={value}" for key, value in cookies_new.items()])
    
    return headers_new, cookies_new


def get_current_events() -> dict[str: str]:
    url = "https://planetarium-hamburg.eventim-inhouse.de/webshop/webticket/shop"

    headers, cookies = get_headers_and_cookies()

    response = requests.get(url, headers=headers, cookies=cookies)
    soup = BeautifulSoup(response.content, "html.parser")

    #find <ul> id="eventListUl" and get all <li> elements
    event_list = soup.find("ul", {"id": "eventListUl"})
    if event_list:
        event_list = event_list.find_all("li")
    else:
        print("No events found")
        return {}


    events = {}
    for event in event_list:
        # find <h2 id="event-title-EVENTID"> and get text
        title = event.find("h2").text
        event_id = event.find("h2")["id"].split("-")[-1]

        # find span with id "event-date-EVENTID" and get text
        date_span = event.find("span", {"id": "event-date-" + event_id})

        # data_span = <span><span>Fri.</span> 16.02.2024</span>
        weekday = date_span.find("span").text.strip()
        date = date_span.text.split("</span>")[0].split(" ")[-1].strip()

        # find span#event-time-EVENTID.evt-event-detail_time
        time_HH_MM = event.find("span", {"id": "event-time-" + event_id}).text.strip()

        # find span id "event-location-EVENTID" 
        location = event.find("span", {"id": "event-location-" + event_id}).text.strip()

        events[event_id] = {
            "title": title,
            "date": date,
            "weekday": weekday,
            "time": time_HH_MM,
            "location": location
        }


    return events

def get_description_and_more_data(event_name: str, log: bool = False) -> dict:
    title = event_name.replace(" ", "-").lower()

    replacements = [
        ("-–-", "-"),
        ("---", "-"),
        ("ä", "ae"),
        ("ü", "ue"),
        ("ö", "oe"),
    ]

    for replacement in replacements:
        title = title.replace(replacement[0], replacement[1])

    url = f"https://www.planetarium-hamburg.de/de/veranstaltungen-tickets/details/{title}/"


    headers, cookies = get_headers_and_cookies()

    headers = {
        "Host": "www.planetarium-hamburg.de",
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:123.0) Gecko/20100101 Firefox/123.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,de;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Cookie": "cookieControl=true; cookieControlPrefs=[]; csrf_https-contao_csrf_token=gt1vLb-9uob77kJexjqhUHOVJxZ7bsr9j3SvKE65EF0",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    }

    r = requests.get(url, headers=headers, cookies=cookies)

    if log:
        with open("response.html", "w") as f:
            f.write(r.text)
            

    soup = BeautifulSoup(r.content, "html.parser")

    div_classes = ["zb-ce", "zb-ce-text", "ce-text", "column"]
    data_div_arrs = []
    for div_class in div_classes:
        data_div_arrs.append(soup.find_all("div", {"class": div_class}))
    
    data_divs = []
    # append all divs that are in all data_div_arrs
    for div in data_div_arrs[0]:
        if all(div in data_div_arr for data_div_arr in data_div_arrs):
            data_divs.append(div)

    desription_text = ""
    for div in data_divs:
        #find all p elements
        p_elements = div.find_all("p")
        if p_elements:
            for p in p_elements:
                desription_text += p.text + "\n"
    

    description_text_cleaned = ""
    data = {}
    for line in desription_text.split("\n"):
        if line.startswith("Eintritt:"):
            # Eintritt: 13,50 Euro, ermäßigt 9,- Euro. Dauer: ca. 50 Minuten. Empfohlen ab 12 Jahren.
            try:
                price_normal_limiters = ["Eintritt: ", " Euro, ermäßigt "]
                price_normal = line.split(price_normal_limiters[0])[1].split(price_normal_limiters[1])[0]
                data["price_normal"] = float(price_normal.replace(",", "."))
            except:
                data["price_normal"] = None

            try:
                price_reduced_limiters = [" Euro. Dauer: ca. ", " Minuten. Empfohlen ab "]
                price_reduced = line.split(price_reduced_limiters[0])[1].split(price_reduced_limiters[1])[0]
                data["price_reduced"] = float(price_reduced.replace(",", "."))
            except:
                data["price_reduced"] = None

            try:
                duration_limiters = [" Euro. Dauer: ca. ", " Minuten. Empfohlen ab "]
                duration = line.split(duration_limiters[0])[1].split(duration_limiters[1])[0]
                data["duration"] = int(duration)
            except:
                data["duration"] = None

            try:
                recommended_age = line.split(duration_limiters[1])[1].split(" Jahren.")[0]
                data["recommended_age"] = int(recommended_age)
            except:
                data["recommended_age"] = None
        else:
            description_text_cleaned += line + "\n"
    
    data["description"] = description_text_cleaned

    # scrape image_url
    # class = "img-responsive zm-lazy"

    img = soup.find("img", {"class": "img-responsive zm-lazy"})
    # find the value for "data-img-src-xxlg"
    img_url = img["data-img-src-xxlg"]

    img_url = f"https://www.planetarium-hamburg.de/{img_url}"

    print(img_url)

    data["img_url"] = img_url

    return data


def scrape_data() -> list[Event]:
    events_data = get_current_events()
    
    for event_id, event_data in events_data.items():
        more_data = get_description_and_more_data(event_data["title"])
        event_data.update(more_data)
    
    events = []
    for event_id, event_data in tqdm(events_data.items()):
        event = Event().from_json(event_data)
        events.append(event)

        print(event, event_data.keys())
    
    return events


if __name__ == "__name__":
    events = scrape_data()
    for idx, event in enumerate(events):
        more_data = get_description_and_more_data(event.title)
        events[idx] = event.from_json(more_data)
    
    print(events)
    
