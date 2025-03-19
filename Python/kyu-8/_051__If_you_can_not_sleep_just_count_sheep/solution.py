def count_sheep(n):
    return ''.join([f'{num + 1} sheep...' for num in range(n)])

print(count_sheep(10))