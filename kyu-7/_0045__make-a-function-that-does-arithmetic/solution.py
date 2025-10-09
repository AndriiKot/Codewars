math_operations = {
    "add": lambda a, b: a + b,
    "subtract": lambda a, b: a - b,
    "multiply": lambda a, b:  a * b,
    "divide": lambda a, b: a / b
}
def arithmetic(a, b, operator):
    return math_operations[operator](a, b)