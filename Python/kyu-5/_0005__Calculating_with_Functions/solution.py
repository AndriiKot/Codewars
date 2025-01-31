def zero(func=None):
    return func(0) if func else 0

def one(func=None):
    return func(1) if func else 1

def two(func=None):
    return func(2) if func else 2

def three(func=None):
    return func(3) if func else 3

def four(func=None):
    return func(4) if func else 4

def five(func=None):
    return func(5) if func else 5

def six(func=None):
    return func(6) if func else 6

def seven(func=None):
    return func(7) if func else 7

def eight(func=None):
    return func(8) if func else 8

def nine(func=None):
    return func(9) if func else 9

def plus(x):
    return lambda num: num + x

def minus(x):
    return lambda num: num - x

def times(x):
    return lambda num: num * x

def divided_by(x):
    return lambda num: num // x
