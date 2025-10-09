def disemvowel(string_):
    vowels = {'a', 'o', 'e', 'i', 'u', 'A', 'O', 'E', 'I', 'U'}  
    return ''.join([char for char in string_ if char not in vowels])  

print(disemvowel('sting my aeuio sting'))  

