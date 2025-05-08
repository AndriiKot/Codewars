def update_light(current)
  {"green" => "yellow", "yellow" => "red", "red" => "green"}[current]
end

=begin

STATE_TRANSITIONS = {
  'green' => 'yellow',
  'yellow' => 'red',
  'red' => 'green'
}

def update_light(current)
  STATE_TRANSITIONS[current]
end

=end

