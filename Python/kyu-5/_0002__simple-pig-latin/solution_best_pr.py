import re
def pig_it(text):
    return re.sub(r'(\w{1})(\w*)', r'\2\1ay', text)