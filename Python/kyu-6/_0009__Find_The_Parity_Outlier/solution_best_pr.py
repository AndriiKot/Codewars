def find_outlier(integers):
    sl = integers[:3]
    is_less_odd = 2 > len([odd for odd in sl if odd & 1])
    if is_less_odd:
        res = next(odd for odd in integers if odd & 1)
    else:
        res = next(even for even in integers if not even & 1)
    return res

print(find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]))