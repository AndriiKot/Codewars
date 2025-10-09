import re

def printer_error(s):
    return f'{len(re.findall(r"[^a-m]", s))}/{len(s)}'
