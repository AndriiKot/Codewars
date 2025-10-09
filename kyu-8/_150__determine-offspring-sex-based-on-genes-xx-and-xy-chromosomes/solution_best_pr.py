def chromosome_check(chromosome):
    sex = 'son' if 'Y' in chromosome else 'daughter'
    return f'Congratulations! You\'re going to have a {sex}.'

#or 

def chromosome_check(sperm):
    return 'Congratulations! You\'re going to have a {}.'.format('son' if 'Y' in sperm else 'daughter')