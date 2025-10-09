def simple_multiplication(number):
    res = number * 8
    if (number & 1):
        res = number * 9
    return res
        