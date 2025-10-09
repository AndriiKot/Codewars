def is_triangle(a, b, c):
    a, b, c = sorted([a, b, c])
    return a + b > c
