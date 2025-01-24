def accum(st):
    return '-'.join([(c * (i + 1)).capitalize() for i, c in enumerate(st)])


print(accum('abc'))