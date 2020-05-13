import time
import numpy as np
import random
from . import Datastore
from faker import Faker
fake = Faker()

class Simulator:

    _buffer = 20
    _x_cage = [2150,3050]
    _y_cage = [2100,3900]
    _dino_step_size = 1
    _car_step_size = 1

    _x_dino = _x_cage[0]+_buffer+np.random.random()*(_x_cage[1]-_x_cage[0]-_buffer*2)
    _y_dino = _y_cage[0]+_buffer+np.random.random()*(_y_cage[1]-_y_cage[0]-_buffer*2)
    _rad_dino = np.random.random()*(2*np.pi)

    _reached_dest_dino = True

    def get_x_dino(self):
        return self. _x_dino

    def get_y_dino(self):
        return self._y_dino

    _x_road = [3100,2600,2100,2100,3100]
    _y_road = [1550,1550,2050,3950,3950]

    _x_car = _x_road[0]
    _y_car = _y_road[0]
    _rad_car = np.random.random() * (2 * np.pi)

    _reached_dest_car = True
    _dest_index_car = 0

    def get_x_car(self):
        return self._x_car

    def get_y_car(self):
        return self._y_car

    _cycle_number = 0
    _stop_car = False

    def stop_car(self):
        self._stop_car = True

    def start_car(self):
        self._stop_car = False

    def get_cycle_number(self):
        return self._cycle_number

    def get_person(self):
        first_name = fake.first_name()
        last_name = fake.last_name()
        age = random.randint(1, 120)
        address = str(random.randint(1, 1200)) + fake.first_name() + " road"
        em_cont = fake.name()
        Datastore.storeGuest(first_name, last_name, age, address, em_cont)

    def make_people(self):
        time.sleep(45)
        people_count = 5
        for i in range(people_count):
            self.get_person()


    def start(self):
        x_dino_step = 0
        y_dino_step = 0
        x_dino_dest = 0
        y_dino_dest = 0

        x_car_step = 0
        y_car_step = 0
        x_car_dest = 0
        y_car_dest = 0

        while(True):
            time.sleep(.01)
            if self._reached_dest_dino:
                x_dino_dest = self._x_cage[0]+self._buffer+np.random.random()*( self._x_cage[1]- self._x_cage[0]-self._buffer*2)
                y_dino_dest = self._y_cage[0]+self._buffer+np.random.random()*( self._y_cage[1]- self._y_cage[0]- self._buffer*2)
                d_dino = np.sqrt((y_dino_dest- self._y_dino)**2+(x_dino_dest-self._x_dino)**2)
                x_dino_step = self._dino_step_size*((x_dino_dest- self._x_dino)/d_dino)
                y_dino_step = self._dino_step_size*((y_dino_dest- self._y_dino)/d_dino)
                if x_dino_dest = self._x_dino and y_dino_dest>=self._y_dino:
                    self._rad_dino = np.pi
                elif x_dino_dest = self._x_dino and y_dino_dest<=self._y_dino:
                    self._rad_dino = 0
                else:
                    self._rad_dino = np.arctan((y_dino_dest-self._y_dino)/(x_dino_dest- self._x_dino)) + (np.pi/2)
                self._reached_dest_dino = False
            if (np.sqrt((y_dino_dest - self._y_dino) ** 2 + (x_dino_dest - self._x_dino) ** 2) < np.sqrt(
                    (x_dino_step) ** 2 + (y_dino_step) ** 2)):
                self._reached_dest_dino = True
                self._x_dino = x_dino_dest
                self._y_dino = y_dino_dest
            else:
                self._x_dino += x_dino_step
                self._y_dino += y_dino_step
            # car
            if not self._stop_car:
                if self._reached_dest_car:
                    if self._dest_index_car >= len(self._x_road) - 1:
                        self._dest_index_car = 0
                       #  self._cycle_number += 1
                    else:
                        self._dest_index_car += 1
                    if self._dest_index_car == 1:
                        self._cycle_number += 1
                    x_car_dest = self._x_road[self._dest_index_car]
                    y_car_dest = self._y_road[self._dest_index_car]
                    d_car = np.sqrt((y_car_dest- self._y_car)**2+(x_car_dest-self._x_car)**2)
                    x_car_step = self._car_step_size*((x_car_dest- self._x_car)/d_car)
                    y_car_step = self._car_step_size*((y_car_dest- self._y_car)/d_car)
                    if x_car_dest = self._x_car and y_car_dest>=self._y_car:
                        self._rad_car = np.pi
                    elif x_car_dest = self._x_car and y_car_dest<=self._y_car:
                        self._rad_car = 0
                    else:
                        self._rad_car = np.arctan((y_car_dest-self._y_car)/(x_car_dest- self._x_car)) + (np.pi/2)
                    self._reached_dest_car = False
                if (np.sqrt((y_car_dest - self._y_car) ** 2 + (x_car_dest - self._x_car) ** 2) < np.sqrt((x_car_step) ** 2 + (y_car_step) ** 2)):
                    self._reached_dest_car = True
                    self._x_car = x_car_dest
                    self._y_car = y_car_dest
                    continue
                self._x_car += x_car_step
                self._y_car += y_car_step
