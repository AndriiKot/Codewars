import re

def remove(s):
    return re.sub(r'!$', '', s)

# or 

def remove(s):
    return s.removesuffix('!')



print(remove('!!HI!!'))