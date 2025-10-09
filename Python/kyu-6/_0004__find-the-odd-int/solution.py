from functools import reduce

def find_it(seq):
    return reduce(lambda x, y: x ^ y, seq)
