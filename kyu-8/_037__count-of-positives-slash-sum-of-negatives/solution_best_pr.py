def count_positives_sum_negatives(arr):
    res = []
    if arr:
        positive_count, negative_sum = 0, 0
        for num in arr:
            if num > 0:
                positive_count += 1
            else:
                negative_sum += num 
        res = [positive_count, negative_sum]
    return res
