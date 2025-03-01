def get_sum(a,b):
    min_value, max_value = min(a, b), max(a, b)
    return sum(range(min_value, max_value+1))