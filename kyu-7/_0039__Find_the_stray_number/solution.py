from functools import reduce

def stray(arr):
    return reduce(lambda cur, pre: cur ^ pre, arr)