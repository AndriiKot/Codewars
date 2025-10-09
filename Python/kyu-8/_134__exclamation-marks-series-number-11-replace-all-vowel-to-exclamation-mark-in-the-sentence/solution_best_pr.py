import re

def replace_exclamation(st):
    return re.sub(r'[aeiou]', '!', st, flags=re.I)

# or

def replace_exclamation(s):
    return s.translate(str.maketrans('aeiouAEIOU', '!' * 10))