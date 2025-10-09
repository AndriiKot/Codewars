def dont_give_me_five(start, end):
    return sum('5' not in str(i) for i in range(start, end + 1))

# or

def dont_give_me_five(start,end):
    return len([num for num in range(start, end+1) if '5' not in str(num)])