def square_or_square_root(arr):
    return [int(num ** 0.5) if num ** 0.5 % 1 == 0 else num ** 2 for num in arr]

print(square_or_square_root([1, 2, 3, 4, 5]))
