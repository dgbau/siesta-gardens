""" A class to control the facilities management of the SGSC """
from .Fence import Fence
from .Sensors import Sensors


class Facilities:

    _fence = Fence()
    _sensors = Sensors()

    _ideal_fence = [0, 0, 0, 0]
    _ideal_sensors = [0, 0, 0, 0]

    # check_break will check if any of the current sensors for trip wires or
    # fence integrity have been triggered, if so then it follows emergency logic
    def check_break(self):
        current_fence = self._sensors.fence_triggered()
        current_sensors = self._sensors.trip_triggered()
        if current_sensors != self._ideal_sensors:
            # dino_disabled = dinosaur.activate_disabler(True)
            #if dino_disabled == (proper_code) ...?????????
            pass
        # Updates fence
        if current_fence != self._ideal_sensors:
            self._fence.update_fence(current_fence)
            # Activate car return people

    # Returns fence integrity as list of integers where 0 is whole, 1 is damaged, 2 is broken
    # Return format: [1, 1, 1, 1]
    def fence_integrity(self):
        return self._fence.fence_integrity()


