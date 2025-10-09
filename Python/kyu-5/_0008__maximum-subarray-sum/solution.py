def max_sequence(arr):
    sum = total = 0
    for num in arr:
        sum += num
        sum = sum if sum > 0 else 0
        total = max(total, sum)
    return total

print(max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
