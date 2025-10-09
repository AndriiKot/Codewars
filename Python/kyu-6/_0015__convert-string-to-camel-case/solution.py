import re

def to_camel_case(text):
    def convert(match):
        return match.group(1).upper()
    return re.sub(r'[-_](.)', convert, text)