operations = {
    '+': lambda x, y: x + y,
    '-': lambda x, y: x - y,
    '*': lambda x, y: x * y,
    '/': lambda x, y: x / y,
}

def basic_op(op, v1, v2):
    return operations[op](v1, v2)

# Примеры использования
print(basic_op('add', 5, 3))        # Вывод: 8
print(basic_op('subtract', 5, 3))   # Вывод: 2
print(basic_op('multiply', 5, 3))   # Вывод: 15
print(basic_op('divide', 5, 3))     # Вывод: 1.6666666666666667
