def digitize(n):
    return [int(i) for i in list(reversed(list(str(n))))]

print(digitize(12345))