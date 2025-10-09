def lower(s):
    return s.lower()

def is_anagram(test, original):
    return sorted(lower(test)) == sorted(lower(original))