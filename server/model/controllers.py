import math, random
import server.model.Main
import threading

from .Simulator import Simulator


simulator = Simulator()
tr = threading.Thread(target=simulator.start)
tr.start()
people_thread = threading.Thread(target=simulator.make_people)
people_thread.start()

def dino_loc():
    return [simulator.get_x_dino(), simulator.get_y_dino()]


def car_loc():
    return [simulator.get_x_car(), simulator.get_y_car()]


def get_state():
    return 'the whole state, calling stuff in the main or the simulatior'
