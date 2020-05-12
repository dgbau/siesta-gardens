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

    _reached_dest = True

    def get_x_dino(self):
        return self. _x_dino

    def get_y_dino(self):
        return self._y_dino

    _x_road = [3100,2600,2100,2100,3000]
    _y_road = [1550,1550,2050,3950,3950]

    def start(self):
        x_dino_step = 0
        y_dino_step = 0
        x_dino_dest = 0
        y_dino_dest = 0

        while(True):
            time.sleep(1)
            if self._reached_dest:
                x_dino_dest = self._x_cage[0]+self._buffer+np.random.random()*( self._x_cage[1]- self._x_cage[0]-self._buffer*2)
                y_dino_dest = self._y_cage[0]+self._buffer+np.random.random()*( self._y_cage[1]- self._y_cage[0]- self._buffer*2)
                self._rad_dino = np.arctan((y_dino_dest- self._y_dino)/(x_dino_dest- self._x_dino))
                d = np.sqrt((y_dino_dest- self._y_dino)**2+(x_dino_dest-self._x_dino)**2)
                x_dino_step = (x_dino_dest- self._x_dino)/d
                y_dino_step = (y_dino_dest- self._y_dino)/d
                self._reached_dest = False
                ###### dino
            if (self._x_dino == x_dino_dest and self._y_dino == y_dino_dest) or np.arctan((y_dino_dest- self._y_dino)/(x_dino_dest- self._x_dino)) != self._rad_dino:
                self._reached_dest = True

            self._x_dino += x_dino_step
            self._y_dino += y_dino_step
            ###### car
