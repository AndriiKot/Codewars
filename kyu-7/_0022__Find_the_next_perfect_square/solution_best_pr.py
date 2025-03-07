def find_next_square(sq):
    x = sq**0.5    
    return -1 if x % 1 else (x+1)**2
