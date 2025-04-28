def feast(beast, dish):
    return all(beast[i] == dish[i] for i in [0, -1])

print(feast("great blue heron", "garlic naan"))
print(feast("brown bear", "bear claw"))
