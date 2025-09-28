def add_length(str_):
    return ["{} {}".format(i, len(i)) for i in str_.split(' ')]

# or

def add_length(str_):
    return [f"{w} {len(w)}" for w in str_.split()]