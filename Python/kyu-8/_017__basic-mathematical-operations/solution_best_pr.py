def basic_op(operator, value1, value2):
    op = {
        '+' : (value1 + value2),
        '-' : (value1 - value2),
        '*' : (value1 * value2),
        '/' : (value1 / value2),
    }
    
    return op[operator]