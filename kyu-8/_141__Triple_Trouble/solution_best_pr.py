def triple_trouble(one, two, three):
    return "".join(a+b+c for a,b,c in zip(one,two,three))

# or

def triple_trouble(one, two, three):
    return ''.join(''.join(a) for a in zip(one, two, three))

# or

def triple_trouble(one, two, three):
    return ''.join([one[i] + two[i] + three[i] for i in range(len(one))])