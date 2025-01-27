import re

def xo(s):
    return len(re.findall('o', s, re.IGNORECASE)) == len(re.findall('x', s, re.IGNORECASE))

