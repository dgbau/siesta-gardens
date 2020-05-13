from .controllers.py import controllers.py
import numpy as np
import time
""" The vehicle class will control the movement and output abilities of the
    vehicle that will transport individuals to and from the exhibit """


class Vehicle:

    # Class Variables for Vehicle.
    _door_lock = False
    _speed = 0
    _acceleration = 0
    _passenger_count = 0
    _car_loc = 0

    def autoStop(self):
        x_car = simulator.get_x_car
        y_car = simulator.get_y_car
        x_dino = simulator.get_x_dino
        y_dino = simulator.get_y_dino
        while(True):
            time.sleep(1)
            dist = np.sqrt((x_car-x_dino)**2+(y_car-y_dino)**2)
            if x_car == 2100 and y_car == 2050 and dist<500:
                


    def lock_unlock_doors(self, lock):
        self._door_lock = lock
        if self._door_lock:
            print("Door is now locked.")
        else:
            print("Door is now unlocked.")

    def broadcast(self, message):
        print(message)

    def brakes_activate(self, brake_value):
        # Do break application for speed
        pass

    def accelerate(self, aps, max_speed):
        # apply acceleration to speed
        self._acceleration = aps

        # In while loop for speeding car up:
        if self._speed >= max_speed:
            return

    def get_passenger_count(self):
        return self._passenger_count

    def get_car_loc(self):
        return self._car_loc
