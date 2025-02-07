def digital_root1(n):
    return n if n < 10 else digital_root(sum(map(int,str(n))))

def digital_root2(n):
    return n%9 or n and 9 