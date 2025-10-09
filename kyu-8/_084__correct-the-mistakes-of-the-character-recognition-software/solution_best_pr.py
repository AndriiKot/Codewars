tr=str.maketrans('015','OIS')

def correct(string):
    return string.translate(tr)

# or

def correct(s):
    mapping = str.maketrans({'0': 'O', '1': 'I', '5': 'S'})
    return s.translate(mapping)


def correct(string):
  return ''.join({'0':'O', '5':'S', '1':'I'}.get(c, c) for c in string)