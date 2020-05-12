import math, random
import server.model.Main
import threading

from .Simulator import Simulator


def print_stuff():
    while True:
        print("helo")


simulator = Simulator()
tr = threading.Thread(target=simulator.start)
#tr2 = threading.Thread(target=print_stuff)
tr.start()
#tr2.start()
tr.join()
#simulator.start()

def dino_loc():
    return [simulator.get_x_dino(), simulator.get_y_dino()]

def car_loc():
    return [random.uniform(1500, 4500), random.uniform(1500, 4500)]


def get_state():
    return 'the whole state, calling stuff in the main or the simulatior'
