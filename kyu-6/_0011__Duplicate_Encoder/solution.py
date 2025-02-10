def duplicate_encode(word):
    word = word.lower()
    uniq_letters = set(word)
    return ''.join('(' if word.count(char) == 1 else ')' for char in word)


print(duplicate_encode('word'))

