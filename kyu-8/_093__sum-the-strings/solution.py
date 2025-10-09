def to_int(s):
    return int(s) if s.isdigit() else 0

def sum_str(a, b):
    return str(to_int(a) + to_int(b))