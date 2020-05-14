from .Fence import Fence
from .Sensors import Sensors

siren_towers = [0, 0, 0, 0, 0, 0, 0, 0]
fence = Fence()
sensors = Sensors()
dinosaurEnable = True

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
    dinosaurEnable = False
