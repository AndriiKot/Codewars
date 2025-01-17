def square_digits(num):
    return int(''.join([str(int(c) ** 2) for c in str(num)]))

