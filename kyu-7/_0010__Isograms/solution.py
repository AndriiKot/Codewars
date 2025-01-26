import re

def is_isogram(string):
    return not bool(re.search(r'(\w).*\1', string, re.IGNORECASE))
