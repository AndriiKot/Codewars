def generate_range(start, stop, step):
    return [*range(start, stop+1, step)]

# or

def generate_range(start, stop, step):
    return [int_ for int_ in range(start, stop+1, step)]

# or

def generate_range(min, max, step):
    return list(range(min, max + 1, step))
