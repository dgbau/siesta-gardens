from flask import Response, jsonify
from server.app import app, helpers
from server.model.Client import Client

c = Client("david", "bau", 1)

print(c)

@app.route('/')
@app.route('/index')
def index():
    return "Hello, Barney!"

@app.route('/users')
def get_users():
    return jsonify(helpers.create_fake_users(10))

@app.route('/data')
def get_data():
    return "ALL THE DATA"

@app.route('/client')
def get_client():
    return str(c)

@app.route('/locs')
def get_locs():
    return "ALL THE LOCATIONS"



