def find_next_square(sq):
    return int(sq ** 0.5 + 1) ** 2 if not sq ** 0.5 % 1 else -1
