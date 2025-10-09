def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    
    directions = {'n': 0, 's': 0, 'w': 0, 'e': 0}
    for dir in walk:
        directions[dir] += 1
    
    n, s, w, e = directions.values()
    return abs(n - s) + abs(w - e) == 0
