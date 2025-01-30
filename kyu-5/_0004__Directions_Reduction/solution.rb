def dirReduc(arr)
  directions = { "NORTH" => "SOUTH", "SOUTH" => "NORTH", "EAST" => "WEST", "WEST" => "EAST" }  
  stack = []
  arr.each { |el| (stack[-1] == directions[el] && stack.pop) || stack << el}
  stack
end

