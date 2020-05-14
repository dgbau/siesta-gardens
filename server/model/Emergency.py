from .Fence import Fence
from .Sensors import Sensors
from . import controllers

siren_towers = [0, 0, 0, 0, 0, 0, 0, 0]
fence = Fence()
sensors = Sensors()
dinosaurEnable = True

def detect_emergency():
    cycle_number = -1
    car_stopped = False
    dino_stopped = False
    while(True):
        time.sleep(0.01)
        if controllers.simulator.get_cycle_number() != cycle_number and dino_stopped == True:
            controllers.simulator.stop_car()
            Datastore.update_all_guests("touring", "riding", "queued", "arrived")
            car_stopped = True
        x_car = controllers.imulator.get_x_car()
        y_car = controllers.simulator.get_y_car()
        x_dino = controllers.simulator.get_x_dino()
        y_dino = controllers.simulator.get_y_dino()
        if x_dino<=2150 or x_dino>=3050 or y_dino<=2100 or y_dino>=3900:
            controllers.simulator.disable_dino()
            activate_disabler()
            dino_stopped = True
        if car_stopped and dino_stopped:
            break
        if controllers.simulator.get_cycle_number() != cycle_number:
            cycle_number = controllers.simulator.get_cycle_number()


def sensor_triggered():
    return sensors.trip_triggered()

def fence_integrity():
    return fence.fence_integrity()

def activate_siren(id):
    if id >= 0  and id < 8:
        siren_towers[id] = 1
        return 1

    else:
        return 0

def activate_disabler():
    global dinosaurEnable
    dinosaurEnable = False
