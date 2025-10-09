def reverse_arr(arr):
    return list(reversed(arr))

def to_join(arr):
    return ''.join(arr)

def fabrick(main_arr, arr):
    return main_arr.append(to_join(reverse_arr(arr)))

def reverse_words(s):
    sentences = []
    word = []
    for i, char in enumerate(s):
        if char == ' ':
            if word:
                fabrick(sentences, word)
                word = []            
            sentences.append(char)
        else:
            word.append(char)
            if i == len(s) - 1:
                fabrick(sentences, word)    
        
    return ''.join(sentences)

print(reverse_words('ad b c d'))
        
         
               
           