def narcissistic(value):
    num_str = str(value)
    digit_count = len(num_str)
    res = sum([int(digit) ** digit_count for digit in num_str])
    return res == value