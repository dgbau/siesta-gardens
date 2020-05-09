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

@app.route('/users')
@cross_origin()
def get_users():
    return jsonify(helpers.create_fake_users(10))

@app.route('/locs')
@cross_origin()
def get_data():
    return jsonify({
        "dino": dino_loc(),
        "car": car_loc()
    })

@app.route('/client')
@cross_origin()
def get_client():
    return str(c)

@app.route('/locs')
@cross_origin()
def get_locs():
    return "ALL THE LOCATIONS"
