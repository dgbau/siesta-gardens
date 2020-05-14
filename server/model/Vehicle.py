import numpy as np
import time
from . import Datastore

""" The vehicle class will control the movement and output abilities of the
    vehicle that will transport individuals to and from the exhibit """


class Vehicle:

    # Class Variables for Vehicle.
    _door_lock = False
    _speed = 0
    _acceleration = 0
    _passenger_count = 0
    _car_loc = 0
    simulator = None

    def __init__(self, sim):
        self.simulator = sim

    def autoStop(self):
        cycle_number = -1
        new_cycle = True
        while(True):
            time.sleep(0.01)
            if self.simulator.get_cycle_number() != cycle_number and new_cycle == True:
                new_cycle = False
                Datastore.update_all_guests("touring", "riding", "queued", "arrived")
                self.simulator.stop_car()
                time.sleep(10)
                self.simulator.start_car()
                Datastore.onboard_guests()
            x_car = self.simulator.get_x_car()
            y_car = self.simulator.get_y_car()
            x_dino = self.simulator.get_x_dino()
            y_dino = self.simulator.get_y_dino()
            dist = np.sqrt((x_car-x_dino)**2+(y_car-y_dino)**2)
            if self.simulator.get_cycle_number() == cycle_number:
                continue
            if x_car == 2100 and dist < 500:
                self.simulator.stop_car()
                Datastore.update_all_guests("touring", "riding", "touring", "exploring")
                time.sleep(20)
                Datastore.update_all_guests("touring", "exploring", "touring", "riding")
                self.simulator.start_car()
                cycle_number = self.simulator.get_cycle_number()
                new_cycle = True
            elif y_car == 3950 and dist < 1900/2:
                self.simulator.stop_car()
                Datastore.update_all_guests("touring", "riding", "touring", "exploring")
                time.sleep(20)
                Datastore.update_all_guests("touring", "exploring", "touring", "riding")
                self.simulator.start_car()
                cycle_number = self.simulator.get_cycle_number()
                new_cycle = True

            elif x_car == 3100 and y_car>(2050+1900/2) and y_dino>(2050+1900/2):
                self.simulator.stop_car()
                Datastore.update_all_guests("touring", "riding", "touring", "exploring")
                time.sleep(20)
                Datastore.update_all_guests("touring", "exploring", "touring", "riding")
                self.simulator.start_car()
                new_cycle = True

                cycle_number = self.simulator.get_cycle_number()
            elif x_car == 3100 and y_car>2050:
                self.simulator.stop_car()
                Datastore.update_all_guests("touring", "riding", "touring", "exploring")
                time.sleep(20)
                Datastore.update_all_guests("touring", "exploring", "touring", "riding")
                self.simulator.start_car()
                cycle_number = self.simulator.get_cycle_number()
                new_cycle = True


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
    # TODO assume that the passenger count becomes 0 when we dump passengaers
    def get_passenger_count(self):
        for people in Datastore.dictionary:
            if people[-1] == "riding":
                self._passenger_count += 1
        return self._passenger_count

    def get_car_loc(self):
        return self._car_loc
