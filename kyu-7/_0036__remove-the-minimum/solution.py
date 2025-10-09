def remove_smallest(numbers):
    if numbers:
        min_num = min(numbers)
    else:
        return []
    flag = False
    result = []
    for number in numbers:
        if flag or number != min_num:
            result.append(number)
        else:
            flag = True
    return result