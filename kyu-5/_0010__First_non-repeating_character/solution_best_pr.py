def first_non_repeating_letter(s):
    up_str = s.upper()
    for i, l in enumerate(up_str):
        if up_str.count(l) == 1:
            return s[i]
    return ''
