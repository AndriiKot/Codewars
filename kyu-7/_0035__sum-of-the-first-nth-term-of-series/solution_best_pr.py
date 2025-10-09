def series_sum(n):
    return '{:.2f}'.format(sum(1.0/(3 * i + 1) for i in range(n)))


# or
# def series_sum(n):
#     return f'{sum(1/d for d in range(1,n*3,3)):.2f}'