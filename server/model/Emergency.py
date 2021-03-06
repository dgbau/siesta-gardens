from .Fence import Fence
from .Sensors import Sensors
from . import controllers
import time
from . import Datastore


siren_towers = [0, 0, 0, 0, 0, 0, 0, 0]
fence = Fence()
sensors = Sensors()
dinosaurEnable = True
fenceBreached = False


def fence_breach():
    global fenceBreached
    fenceBreached = True
    x_car = controllers.simulator.get_x_car()
    y_car = controllers.simulator.get_y_car()
    if x_car<=2150:
        fence.update_fence([0,0,0,1])
    elif x_car>=3050:
        fence.update_fence([0,1,0,0])
    elif y_car<=2100:
        fence.update_fence([1,0,0,0])
    elif y_car>=3900:
        fence.update_fence([0,0,1,0])

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
        x_car = controllers.simulator.get_x_car()
        y_car = controllers.simulator.get_y_car()
        x_dino = controllers.simulator.get_x_dino()
        y_dino = controllers.simulator.get_y_dino()
        if x_dino<=2150 or x_dino>=3050 or y_dino<=2100 or y_dino>=3900:
            controllers.simulator.disable_dino()
            activate_disabler()
            dino_stopped = True
            if x_dino<=2150:
                fence.update_fence([0,0,0,2])
            elif x_dino>=3050:
                fence.update_fence([0,2,0,0])
            elif y_dino<=2100:
                fence.update_fence([2,0,0,0])
            elif y_dino>=3900:
                fence.update_fence([0,0,2,0])
        if car_stopped and dino_stopped:
            controllers.vehicle_thread.stop()
            controllers.people_thread.stop()
            controllers.tr.stop()
            sys.exit()
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
