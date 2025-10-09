def open_or_senior(data):
    return ['Senior' if el[0] >= 55 and el[1] > 7 else 'Open' for el in data]

print(open_or_senior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))