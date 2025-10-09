def series_sum(n):
    res, count, step = 0, 0, 3
    while (count < n):
        res += 1 / (1 + count * step)
        count += 1
    return "{:.2f}".format(res) if n > 0 else "0.00"



print(series_sum(0))



