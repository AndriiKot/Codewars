import re

def increment_string(input_str):
    match = re.search(r'(\d*)$', input_str)

    if match:
        number_str = match.group(0)
        if number_str == '':
            incremented_number = '1'
        else:
            incremented_number = str(int(number_str) + 1)

        incremented_number = incremented_number.zfill(len(number_str))

        return input_str[:match.start()] + incremented_number
    return input_str

print(increment_string("file007"))  # file008
print(increment_string("file"))      # file1
print(increment_string("file001"))   # file002
