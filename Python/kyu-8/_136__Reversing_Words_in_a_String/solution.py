def reverse(st):
    return ' '.join(st.split(' ')[::-1])


# or 

def reverse(st):
    return " ".join(reversed(st.split())).strip()