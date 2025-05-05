def divisors(integer):
    arr = []
    count = 2
    while count < integer:
        arr.append(count) if not integer % count else None
        count += 1
    return arr if arr else f'{integer} is prime' 



print(divisors(6))