import re

def no_space1(x):
    return re.sub(r'\s+', '', x)


def no_space2(x):
    return "".join(x.split())