def problem(a):
    return 'Error' if type(a) is str else a*50+6

# or
def problem(a):
    try:
        return a * 50 + 6
    except TypeError:
        return "Error"


# or
def problem(a):
    return "Error" if a == str(a) else a * 50 + 6