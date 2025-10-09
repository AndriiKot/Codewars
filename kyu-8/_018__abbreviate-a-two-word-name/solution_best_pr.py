def abbrevName1(name):
    return '.'.join(w[0] for w in name.split()).upper()

def abbrevName2(name):
    first, last = name.upper().split(' ')
    return first[0] + '.' + last[0]
