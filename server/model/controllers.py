import math, random
import server.model.Main

def dino_loc():
    return [random.uniform(2150, 3050), random.uniform(2100, 3900)]

def car_loc(): 
    return [random.uniform(1500, 4500), random.uniform(1500, 4500)]


def get_state():
    return 'the whole state, calling stuff in the main or the simulatior'


