from collections import defaultdict

def duplicate_count(text):
    letters = defaultdict(int)
    for c in text.lower():
        letters[c] += 1
    return len([count for count in letters.values() if count > 1])
     

print(duplicate_count('abcdeaB'))
