import math, random

def dino_loc():
    return [random.uniform(27.28, 27.29), random.uniform(-82.55, -82.56)]

def cars_loc(): 
    return {
        "car1": [random.uniform(12, 13), random.uniform(12, 13)],
        "car2": [random.uniform(12, 13), random.uniform(12, 13)],
        "car3": [random.uniform(12, 13), random.uniform(12, 13)]
    }