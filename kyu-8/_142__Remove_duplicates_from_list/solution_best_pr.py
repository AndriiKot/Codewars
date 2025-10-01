def distinct(seq):
    return [*dict.fromkeys(seq)]

# or

from collections import Counter

def distinct(seq):
    return list(Counter(seq).keys())