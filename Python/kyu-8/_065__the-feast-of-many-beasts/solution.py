def feast(beast, dish):
    return beast[0] == dish[0] and beast[-1] == dish[-1]

# or

def feast2(beast, dish):
    return all(beast[i] == dish[i] for i in [0, -1])

print(feast("great blue heron", "garlic naan"))
print(feast("brown bear", "bear claw"))

print(feast2("great blue heron", "garlic naan"))
print(feast2("brown bear", "bear claw"))


