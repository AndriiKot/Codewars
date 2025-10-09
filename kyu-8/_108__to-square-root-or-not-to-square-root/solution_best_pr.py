from math import sqrt

def square_or_square_root(arr):
    return [int(sqrt(a)) if sqrt(a) % 1 == 0 else a ** 2 for a in arr]