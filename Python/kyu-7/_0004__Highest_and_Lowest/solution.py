def high_and_low(numbers):
    list_sort_int = sorted([int(str) for str in numbers.split()])
    return f"{list_sort_int[-1]} {list_sort_int[0]}"


print(high_and_low('5 4 3 2 1'))