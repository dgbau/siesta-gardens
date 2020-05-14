import math, random
import server.model.Main
import threading
from . import Emergency
from . import Datastore

from flask import Flask, Response, jsonify

from .Simulator import Simulator
from .Vehicle import Vehicle


simulator = Simulator()
tr = threading.Thread(target=simulator.start)
tr.start()
people_thread = threading.Thread(target=simulator.make_people)
people_thread.start()
vehicle = Vehicle(simulator)
vehicle_thread = threading.Thread(target=vehicle.autoStop)
vehicle_thread.start()

def dino_loc():
    return [simulator.get_x_dino(), simulator.get_y_dino(), simulator.get_rad_dino()]


def car_loc():
    return [simulator.get_x_car(), simulator.get_y_car(), simulator.get_rad_car()]


def make_person(guest):
    return {
        "firstName": Datastore.dictionary[guest][0],
        "lastName": Datastore.dictionary[guest][1],
        "id": guest,
        "status": Datastore.dictionary[guest][-2],
        "location": Datastore.dictionary[guest][-1]
    }

def world_state():
    fence_state = Emergency.fence_integrity()
    client_list = []
    trip_wire = Emergency.sensor_triggered()
    for guest in Datastore.dictionary:
        client_list.append(make_person(guest))
    return {
    "dinosaurState": Emergency.dinosaurEnable,
    "perimeterData": {
        "sections": fence_state,
        "tripWireAlert": trip_wire # add method
    },
        #first name, last name, id, location
    "clientData": {
        "clients": client_list
    }
    }



