'''
The Data store archives guest data from the guest registration forms
and associates that data with their personal unique identifier.
'''
import numpy as np
import csv
status_options = ["queued", "touring"]
location_options = ["exploring", "riding", "ticketed", "arrived"]
dictionary = {}
'''
This function stores guest data when they register through the kiosk and issues
a nw unique_id. Each visitor has the following data saved:
[first_name, middle_name, last_name, age, address, emergency_contact, state]
note that the state keeps track of the location of the visitor and can be one
of the follwing: "waiting","inVehicle","viewing"
'''
def storeGuest(first_name, last_name, age, address, emergency_contact):
    unique_id = int(np.random.random()*1000000000)
    while unique_id in dictionary:
        unique_id = int(np.random.random()*1000000000)
    dictionary[unique_id] = [first_name, last_name, age, address,
                             emergency_contact, status_options[0], location_options[2]]
    with open ("data.csv","a")as file:
        writer = csv.writer(file)
        writer.writerow([unique_id]+dictionary[unique_id])

'''
This function retrieves and returns guest information.
'''
def getGuest(unique_id):
    if unique_id not in dictionary:
        return None
    return dictionary[unique_id]

'''
This function updates the status of the visitor
returns True is successful and False if not successful
'''


def updateGuest(unique_id, new_status, new_location):
    if unique_id not in dictionary:
        return False
    dictionary[unique_id][-2] = new_status
    dictionary[unique_id][-1] = new_location
    return True
