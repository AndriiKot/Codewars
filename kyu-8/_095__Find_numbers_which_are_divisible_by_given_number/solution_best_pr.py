def divisible_by(n, d):
    return list(filter(lambda x: not x%d, n))