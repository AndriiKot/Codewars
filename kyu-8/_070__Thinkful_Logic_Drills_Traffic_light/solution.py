next_lights = {
  'green': 'yellow',
  'yellow': 'red',
  'red': 'green'
}

def update_light(current):
    return next_lights[current]


update_light('green')