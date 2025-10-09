def hello(name=None):
    return "Hello, {}!".format(name.title() if name else "World")

# or

def hello(name=None):
    return f"Hello, {(name.title() if name else 'World')}!"

# or

def hello(name=''):
    return "Hello, {}!".format(name.title() if name else 'World')