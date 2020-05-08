""" A class to control the facilities management of the SGSC """
from .Fence import Fence
from .Sensors import Sensors


class Facilities:

    fence = Fence()
    sensors = Sensors()


