def mouth_size(animal): 
    return 'small' if animal.casefold() == 'alligator' else 'wide'


def mouth_size(animal):
    return ['wide', 'small'][animal.casefold() == 'alligator']

# or

def mouth_size(animal): 
    mouth = {'alligator':'small'}
    return mouth.get(animal.lower(), 'wide')


# or 

def mouth_size(animal): 
    return ["wide", "small"][animal.lower() == "alligator"]