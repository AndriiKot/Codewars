def generate_hashtag(s):
    new_string = ''.join([c.capitalize() for c in s.split()])
    size = len(new_string)
    return size < 140 and size > 0 and f'#{new_string}'
    
