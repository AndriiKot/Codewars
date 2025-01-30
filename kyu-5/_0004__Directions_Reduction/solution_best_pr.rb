OPPOSITE = {
  "NORTH" => "SOUTH",
  "SOUTH" => "NORTH",
  "EAST"  => "WEST",
  "WEST"  => "EAST"
}

def dirReduc(arr)
  arr.each_with_object([]) { |direction, path|
    path.last == OPPOSITE[direction] ? path.pop : path.push(direction)
  }
end