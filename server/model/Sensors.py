""" The sensors class represents the sensors
    associated to the fences as well as the tripwire sensors """


class Sensors:
    _trip_wires = [0, 0, 0, 0]
    _fence_sensor = [0, 0, 0, 0]

    def trip_triggered(self):
        for i in self._fence_sensor:
            if i != 0:
                return True

        return False

    def fence_triggered(self):
        return self._fence_sensor
