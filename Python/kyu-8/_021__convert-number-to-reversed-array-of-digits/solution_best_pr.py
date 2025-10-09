def digitize1(n):
    return [int(x) for x in str(n)[::-1]]

def digitize2(n):
    return [int(x) for x in reversed(str(n))]
