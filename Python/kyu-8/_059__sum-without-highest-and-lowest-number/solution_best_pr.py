def sum_array(arr):
    return arr and len(arr) > 2 and sum(sorted(arr)[1:-1]) or 0


print(sum_array([6, 2, 1, 8, 10]))