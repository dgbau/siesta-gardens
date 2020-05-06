import math, random
import server.model.Main

def dino_loc():
    return [random.uniform(27.28, 27.29), random.uniform(-82.55, -82.56)]

def cars_loc(): 
    return {
        "car1": [random.uniform(12, 13), random.uniform(12, 13)],
        "car2": [random.uniform(12, 13), random.uniform(12, 13)],
        "car3": [random.uniform(12, 13), random.uniform(12, 13)]
    }

def get_state():
    return 'the whole state, calling stuff in the main or the simulatior'