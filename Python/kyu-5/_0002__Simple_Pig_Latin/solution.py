import re

def pig_it(s):
    return re.sub(r'(\w)(\w*)', lambda x: x.group(2) + x.group(1) + 'ay', s)