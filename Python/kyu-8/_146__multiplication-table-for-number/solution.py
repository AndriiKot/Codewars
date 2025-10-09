def multi_table(n):
    return '\n'.join(['{0} * {1} = {2}'.format(i, n, n*i) for i in range(1,11)])

# or

def multi_table(number):
    return '\n'.join(f'{i} * {number} = {i * number}' for i in range(1, 11))