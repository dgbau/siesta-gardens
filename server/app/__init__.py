from flask import Flask
from flask_socketio import SocketIO, disconnect, emit

app = Flask(__name__)

from server.app import routes
