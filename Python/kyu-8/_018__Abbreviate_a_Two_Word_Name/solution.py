def abbrev_name(name):
    split_name = name.split()
    return f'{split_name[0][0].upper()}.{split_name[1][0].upper()}'


print(abbrev_name('Sam Harris'))