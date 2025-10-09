def digits(n=0, base=10):
    result = []
    while n > 0:
        result.append(n % base)
        n //= base
    return result

def digital_root(n):
    return n if n < 10 else digital_root(sum(digits(n)))

print(digital_root(123))