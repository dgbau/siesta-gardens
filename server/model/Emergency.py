

siren_towers = [0, 0, 0, 0, 0, 0, 0, 0]


def activate_siren(id):
    if id >= 0  and id < 8:
        siren_towers[id] = 1
        return 1

    else:
        return 0


def activate_disabler():
    return 1
