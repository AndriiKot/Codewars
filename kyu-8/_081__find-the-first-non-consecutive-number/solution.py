def first_non_consecutive(arr):
    for a, b in zip(arr, arr[1:]):
        if b != a + 1:
            return b
