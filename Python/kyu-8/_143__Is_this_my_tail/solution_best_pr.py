def correct_tail(body, tail):
    return body[-1] == tail

# or

def correct_tail(body, tail):
    return body.endswith(tail)
