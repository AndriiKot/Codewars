def get_middle(s):
    size = len(s)
    mid = size // 2
    if (size & 1):
        return s[mid:mid + 1]
    else:
        return s[mid - 1: mid + 1]


print(get_middle('sts'))
