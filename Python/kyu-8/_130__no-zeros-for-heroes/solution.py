import re

def no_boring_zeros(num):
    return int(re.sub(r"0*$", "", str(num)) or 0) 

# or

def no_boring_zeros(num):
    return int(str(num).rstrip('0') or 0) 