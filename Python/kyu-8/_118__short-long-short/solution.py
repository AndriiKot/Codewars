def solution(a, b):
    s, l = min(a, b, key=len), max(a, b, key=len)
    return s + l + s