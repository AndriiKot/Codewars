def create_array(n)
  Array.new(n) { |i| i += 1 }
end

p create_array(15)