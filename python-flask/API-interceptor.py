# -*- coding: utf-8 -*-
"""
Created on Thu Jul 27 12:38:56 2023

@author: MSI
"""

import requests
import json
from flask import Flask
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)

# create a MongoDB client and connect to the database
client = MongoClient('mongodb://localhost:27017/')
db = client['Thnity-Prices']
collection = db['BUGS-BUNNY']


@app.route('/<float:lat1>/<float:lng1>/<float:lat2>/<float:lng2>/<string:Fromto>')
def get_ride_options(lat1, lng1, lat2, lng2, Fromto):
    url = 'https://user.live.boltsvc.net/rides/search/getRideOptions?version=CA.72.2&deviceId=d8b9d23d-9d69-41e1-a00f-3ca59d3d73ab&device_name=unknownAndroid%20SDK%20built%20for%20x86&device_os_version=11&channel=googleplay&deviceType=android&signup_session_id=3450b7dd22fdccedd5b8ab7a61ff503ad3ce1cd6378e7e09396711b479f23977&country=tn&language=en&user_id=39844542&session_id=39844542u1690377342130&distinct_id=client-39844542&rh_session_id=d8b9d23d-9d69-41e1-a00f-3ca59d3d73abu1690377317'

    headers = {
        'Accept-Encoding': 'gzip',
        'Authorization': 'Basic KzIxNjUzMzQ0NTExOjZkZmRiZmRiLTZmNWMtNDk4Ni1iN2M2LTAxZTY5NTIyNGMyYw==',
        'Content-Type': 'application/json; charset=UTF-8',
        'Cookie': '__cf_bm=7xExm.m0cSo6od19jP3Xa5qXXSUsZlzOoqdKln3jDdo-1690381819-0-Aa5/eSmmqK4z0/IpHDRZgwcu9ab9VOoaN0yNGECmIvR5ZhuH9hB0GLvMBDJ5M9RQ3XtP8d4jCcjiRZE1dR6emc0=',
        'User-Agent': 'okhttp/4.10.0',
        'Content-Length': '318'
    }

    payload = {
        "campaign_code": {
            "ridehailing": "TNVCZ4HKVC6GMLM-1"
        },
        "destination_stops": [
            {
                "lat": lat2,
                "lng": lng2
            }
        ],
        "payment_method": {
            "id": "cash",
            "type": "default"
        },
        "pickup_stop": {
            "address": "Tunis",
            "lat": lat1,
            "lng": lng1,
            "place_id": "google|ChIJ8xtHMU7L4hIRmCGEzvtevGU"
        },
        "preliminary": False,
        "timezone": "Europe/Paris"
    }

    response = requests.post(url, headers=headers, json=payload)
    response_data = response.json()
    response_data['From - to'] = Fromto
    response_data['Time'] = datetime.now()

    # insert the response data into the MongoDB collection
    collection.insert_one(response_data)
    print(response_data)
    return response.json()

if __name__ == '__main__':
    app.run(debug=True)