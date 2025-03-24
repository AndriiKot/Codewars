def binary_array_to_number(arr):
    return int(''.join([f'{num}' for num in arr]), 2)


print(binary_array_to_number([1, 1, 1, 1]))