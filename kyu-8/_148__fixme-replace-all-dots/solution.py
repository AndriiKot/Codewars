def replace_dots(s):
    return s.replace('.', '-')

# or

import re
def replace_dots(str):
    return re.sub(r"\.", "-", str)