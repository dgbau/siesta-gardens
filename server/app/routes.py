from flask import Response
from app import app, helpers
import json


@app.route('/')
@app.route('/index')
def index():
    return "Hello, Barney!"

@app.route('/users')
def get_users():
    return Response(json.dumps(helpers.create_fake_users(10)),  mimetype='application/json')




