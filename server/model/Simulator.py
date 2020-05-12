import time
import numpy as np

class Simulator:
    _x_dino = _x[0]+buffer+np.random.random()*(_x[1]-x[0]-buffer*2)
    _y_dino = _y[0]+buffer+np.random.random()*(_y[1]-y[0]-buffer*2)
    _rad_dino = np.random.random()*(2*pi)

    _dino_buffer = 20
    _x_cage = [2150,3050]
    _y_cage = [2100,3900]
    _dino_step_size = 1
    _car_step_size = 1

    _reached_dest = True

    def get_x_dino():
        return _x_dino
    def get_y_dino():
        return _y_dino
    
    _x_road = [3100,2600,2100,2100,3000]
    _y_road = [1550,1550,2050,3950,3950]

    def start():
        while(True):
            sleep(1)
            ###### dino
            if (_x_dino == x_dino_dest and _y_dino == y_dino_dest) or np.arctan((y_dino_dest-y_dino)/(x_dino_dest-x_dino)) != rad_dino:
                _reached_dest = True
            if _reached_dest:
                x_dino_dest = _x_cage[0]+buffer+np.random.random()*(_x_cage[1]-_x_cage[0]-buffer*2)
                y_dino_dest = _y_cage[0]+buffer+np.random.random()*(_y_cage[1]-_y_cage[0]-buffer*2)
                rad_dino = np.arctan((y_dino_dest-y_dino)/(x_dino_dest-x_dino))
                d = np.sqrt((y_dino_dest-_y_dino)**2+(x_dino_dest-_x_dino)**2)
                x_dino_step = (x_dino_dest-x_dino)/d
                y_dino_step = (y_dino_dest-y_dino)/d
                _reached_dest = False
            _x_dino += x_dino_step
            _y_dino += y_dino_step
            ###### car
