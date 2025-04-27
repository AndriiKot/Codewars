import re

def remove_exclamation_marks(s):
    return s.replace('!', '')

# or

def remove_exclamation_marks2(s):
    return re.sub(r'[!]', '', s);


print(remove_exclamation_marks("!!!Hello World!!!"));
print(remove_exclamation_marks2("!!!Hello!!! World!!!"));