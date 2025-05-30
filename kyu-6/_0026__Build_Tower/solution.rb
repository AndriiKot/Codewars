def towerBuilder(n_floors)
  space_count = 2
  star_count  = n_floors + n_floors - 1
  Array.new(n_floors) { |i| " " * i + "*" * (star_count - (i * space_count)) + " " * i }.reverse
end


p towerBuilder(3)
p towerBuilder(5)
