def stringy(size):
    return ''.join('0' if i & 1 else '1' for i in range(size))

print(stringy(5))