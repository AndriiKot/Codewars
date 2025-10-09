def dir_reduc(arr):
    opposite = { "NORTH": "SOUTH", "SOUTH": "NORTH", "EAST": "WEST", "WEST": "EAST" }  
    stack = []
    for el in arr:
        stack and stack[-1] == opposite[el] and stack.pop() or stack.append(el)
    return stack
