def spin_words1(s):
    return ' '.join([w[::-1] if len(w) >= 5 else w for w in s.split()])

import re

def spin_words2(string):
    return re.sub(r'\w{5,}', lambda x: x.group()[::-1], string)
