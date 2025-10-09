def name_shuffler(str_):
    return ' '.join(str_.split(' ')[::-1])

# or

def name_shuffler(str_):
    return ' '.join(reversed(str_.split(' ')))