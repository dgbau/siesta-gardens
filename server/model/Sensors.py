""" The sensors class represents the sensors
    associated to the fences as well as the tripwire sensors """


class Sensors:
    _trip_wires = [0, 0, 0, 0]
    _fence_sensor = [0, 0, 0, 0]

    def trip_triggered(self):
        return self._trip_wires

    def fence_triggered(self):
        return self._fence_sensor
