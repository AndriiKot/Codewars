def say_hello(name, city, state):
    return f'Hello, {" ".join(name)}! Welcome to {city}, {state}!'

# or

def say_hello(name, city, state):
  return "Hello, {}! Welcome to {}, {}!".format(" ".join(name), city, state)
