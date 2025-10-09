likesText = [
    "no one likes this",
    "{} likes this",
    "{} and {} like this",
    "{}, {} and {} like this",
    "{}, {} and {} others like this",
]

def likes(names):
    text = likesText[min(len(names), 4)]
    res = text.format(*names)
    if text == likesText[-1]:
        res = text.format(names[0], names[1], len(names) - 2)
    return res

    
  

