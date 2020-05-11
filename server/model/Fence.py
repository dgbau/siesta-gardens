""" A class to  represent the Fence structure which will control the Dinosaur in the SGSC"""

class Fence:

    """ The fence state will be represented as a series of
        integers representing the four sides of the fence
        in the order of [N, E, S, W] where 0 represents a break
        in the fence, and 1 represents a good fence line """

    _fence = [0, 0, 0, 0]

    ''' Return the current state of the fence'''
    def fence_integrity(self):
        return self._fence

    ''' Update the state of the fence, where 0 is an unchanged or whole fence '''
    ''' NOTE: THIS ASSUMES FENCE CANNOT BE REPAIRED '''
    def update_fence(self, new_state):
        self._fence = [x if y == 0 else y for x, y in zip(self._fence, new_state)]





