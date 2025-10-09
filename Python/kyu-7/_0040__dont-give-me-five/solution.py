def dont_give_me_five(start,end):
    count = 0
    while start <= end:
        if not ('5' in str(start)):
            count += 1
        start += 1
    return count



dont_give_me_five(4, 17)
          