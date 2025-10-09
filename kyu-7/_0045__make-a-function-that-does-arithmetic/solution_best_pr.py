def arithmetic(a, b, operator):
    return {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b,
    }[operator]


#or

def get_operation_result(a, b):
    return {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b,
    }

def arithmetic(a, b, operator):
    return get_operation_result(a, b)[operator]

#or

from operator import add, mul, sub, truediv


def arithmetic(a, b, operator):
    ops = {'add': add, 'subtract': sub, 'multiply': mul, 'divide': truediv}
    return ops[operator](a, b)
