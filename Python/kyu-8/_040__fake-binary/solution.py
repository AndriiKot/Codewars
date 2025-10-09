def fake_bin(s):
    return ''.join('1' if int(c) >= 5 else '0' for c in s)

print(fake_bin('5555'))

