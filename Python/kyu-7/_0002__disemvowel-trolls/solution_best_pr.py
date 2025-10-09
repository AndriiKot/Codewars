def disemvowel(string):
    return "".join(c for c in string if c not in "aeiouAEIOU")