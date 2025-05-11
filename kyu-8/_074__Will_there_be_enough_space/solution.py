def enough(cap, on, wait):
    res = cap - on - wait
    return 0 if res > 0 else -res