floor_rules = [
    (lambda floor: floor > 13, 2),
    (lambda floor: floor > 0, 1),
    (lambda floor: True, 0),
]

def get_real_floor(american_floor):
    for condition, offset in floor_rules:
        if condition(american_floor):
            return american_floor - offset
