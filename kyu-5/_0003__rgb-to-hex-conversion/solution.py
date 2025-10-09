def rgb(r, g, b):
    return ''.join([(n>= 255 and "FF") or (n <= 0 and "00") or hex(n)[2:].upper().zfill(2) for n in [r, g, b]])

print(rgb(255, 255, 255)); # "FFFFFF"
print(rgb(0, 0, 0)); # "000000"
print(rgb(3, 3, 3)); # "030303"
