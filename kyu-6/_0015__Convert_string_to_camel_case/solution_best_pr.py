import re
def to_camel_case(text):
    return re.sub('[_-](.)', lambda x: x.group(1).upper(), text)