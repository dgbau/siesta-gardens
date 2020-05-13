import time
import numpy as np

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

    _x_road = [3100,2600,2100,2100,3000]
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
            time.sleep(1)
            if self._reached_dest_dino:
                x_dino_dest = self._x_cage[0]+self._buffer+np.random.random()*( self._x_cage[1]- self._x_cage[0]-self._buffer*2)
                y_dino_dest = self._y_cage[0]+self._buffer+np.random.random()*( self._y_cage[1]- self._y_cage[0]- self._buffer*2)
                self._rad_dino = np.arctan((y_dino_dest- self._y_dino)/(x_dino_dest- self._x_dino))
                d_dino = np.sqrt((y_dino_dest- self._y_dino)**2+(x_dino_dest-self._x_dino)**2)
                x_dino_step = self._dino_step_size*((x_dino_dest- self._x_dino)/d_dino)
                y_dino_step = self._dino_step_size*((y_dino_dest- self._y_dino)/d_dino)
                self._reached_dest_dino = False
            if (self._x_dino == x_dino_dest and self._y_dino == y_dino_dest) or np.arctan((y_dino_dest- self._y_dino)/(x_dino_dest- self._x_dino)) != self._rad_dino:
                self._reached_dest_dino = True
            print( str(self._x_dino) + " is the location of the dino in x")
            print( str(self._y_dino) + " is the location of the dino in y")
            self._x_dino += x_dino_step
            self._y_dino += y_dino_step
            ###### car
            if self._reached_dest_car:
                if self._dest_index_car>=len(self._x_road):
                    self._dest_index_car = 0
                else:
                    self._dest_index_car += 1
                x_car_dest = self._x_road[self._dest_index_car]
                y_car_dest = self._y_road[self._dest_index_car]
                self._rad_car = np.arctan((y_car_dest- self._y_car)/(x_car_dest- self._x_car))
                d_car = np.sqrt((y_car_dest- self._y_car)**2+(x_car_dest-self._x_car)**2)
                x_car_step = self._car_step_size*((x_car_dest- self._x_car)/d_car)
                y_car_step = self._car_step_size*((y_car_dest- self._y_car)/d_car)
                self._reached_dest_car = False
            # if (self._x_car == x_car_dest and self._y_car == y_car_dest) or np.arctan((y_car_dest- self._y_car)/(x_car_dest- self._x_car)) != self._rad_car:
            #     self._reached_dest_car = True
            print( str(self._x_car) + " is the location of the car in x")
            print( str(self._y_car) + " is the location of the car in y")
            if(np.sqrt((y_car_dest- self._y_car)**2+(x_car_dest-self._x_car)**2)<np.sqrt((x_car_step)**2+(y_car_step)**2)):
                self._reached_dest_car = True
                continue
            self._x_car += x_car_step
            self._y_car += y_car_step
