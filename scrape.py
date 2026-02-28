import requests
from bs4 import BeautifulSoup
import json

urls = [
    "https://www.mycititours.com/holiday/holidaydetail/MysoreCoorgTourPackagePrivateCabSedan",
    "https://www.mycititours.com/holiday/holidaydetail/MysoreOneDayCityTourPrivateVehicleFourPersonMaxbySedan",
    "https://www.mycititours.com/holiday/holidaydetail/MysoreOneDayCityTourGroupTour",
    "https://www.mycititours.com/holiday/holidaydetail/MysoreOotyCoonoorSiteseeing"
]

data = []
for url in urls:
    try:
        res = requests.get(url, timeout=10)
        soup = BeautifulSoup(res.text, 'html.parser')
        
        title = soup.find('h2')
        title = title.text.strip() if title else ""
        
        days_tag = soup.find('i', class_='flaticon-sun-umbrella')
        days = days_tag.parent.text.strip() if days_tag and days_tag.parent else ""
        
        itin = soup.find_all('div', class_='accrodion')
        itinerary = []
        for d in itin:
            d_title = d.find('h5')
            d_desc = d.find('div', class_='accrodion-content')
            if d_title and d_desc:
                itinerary.append({
                    "day": d_title.text.strip(),
                    "desc": d_desc.text.strip()
                })
                
        price_tag = soup.find('h2', class_='price')
        if not price_tag:
            # Let's try getting price from wherever it might be
            pass
            
        data.append({
            "id": url.split('/')[-1],
            "name": title or url.split('/')[-1],
            "duration": days.replace("Days", "").strip() + " Days" if "Days" in days else "Duration Varies",
            "itinerary": itinerary
        })
    except Exception as e:
        print(f"Error on {url}: {e}")

with open("scraped_packages.json", "w") as f:
    json.dump(data, f, indent=2)

print("Done")
