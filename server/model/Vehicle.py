""" The vehicle class will control the movement and output abilities of the
    vehicle that will transport individuals to and from the exhibit """


class Vehicle:

    # Class Variables for Vehicle.
    _door_lock = False
    _speed = 0
    _acceleration = 0
    _passenger_count = 0
    _car_loc = 0

    def lock_unlock_doors(self, lock):
        self._door_lock = lock
        if self._door_lock:
            print("Door is now locked.")
        else:
            print("Door is now unlocked.")

    def broadcast(self, message):
        print(message)

    def brakes_activate(self, brake_value):
        # Do break application for speed
        pass

    def accelerate(self, aps, max_speed):
        # apply acceleration to speed
        self._acceleration = aps

        # In while loop for speeding car up:
        if self._speed >= max_speed:
            return

    def get_passenger_count(self):
        return self._passenger_count

    def get_car_loc(self):
        return self._car_loc
