NEXT_LIGHTS = {
  'green' => 'yellow',
  'yellow' => 'red',
  'red' => 'green'
}

def update_light(current)
  NEXT_LIGHTS[current]
end


p update_light('green')