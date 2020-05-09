'''
The Power Source Output Controller receives a signal from the Main Controller determining the state of the power source.
The state can be set to off, wave, or grid for the different sources of  power or completely shut off.
'''
from enum import Enum
power_state = Enum("off","wave","grid")
current_power_source = power_state.grid

'''returns the power source state currently set, encoded as an integer.'''
def getPowerState():
    return current_power_source

'''changes the state of the power source and returns a boolean for success or failure'''
def setPowerState(state):
    current_power_source = state
