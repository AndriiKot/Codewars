import math

def divisors(n):
    count, start = 0, 1
    while start <= math.sqrt(n):
        if (n % start == 0):
            if (start == n // start):
                count += 1
            else:
                count += 2
        start += 1
    return count