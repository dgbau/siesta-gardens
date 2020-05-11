from flask import Flask, Response, jsonify
from flask_socketio import SocketIO, disconnect, emit
from flask_cors import CORS, cross_origin
from server.app import helpers
from server.model.Client import Client
from server.model.controllers import dino_loc, car_loc

c = Client("david", "bau", 1)
print(c)

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
@app.route('/index')
@cross_origin()
def index():
    return "Hello, Barney!"

@app.route('/locs')
@cross_origin()
def get_data():
    return jsonify({
        "dino": dino_loc(),
        "car": car_loc()
    })

@app.route('/park-state')
@cross_origin()
def get_state():
    dinoloc = dino_loc()
    carloc = car_loc()
    return jsonify({
    "camData": {
        "x":0,
        "y":200,
        "z":0,
        "rotX":-1.57,
        "rotY":0,
        "rotZ":0
    },
    "locationData": {
        "dinoLoc": {
            "x": dinoloc[0],
            "y": dinoloc[1],
            "heading": 0
        },
        "carLoc": {
            "x": carloc[0],
            "y": carloc[1],
            "heading": 0
        },
    },
    "perimeterData": {
        "sections": [0,1,2,0],
        "tripwireAlert": False
    },
    "clientData": {
        "clients": helpers.create_fake_users(10)
    }
})
