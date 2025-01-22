def is_square(x)
  x >= 0 ? Math.sqrt(x) % 1 == 0 : false
end


p is_square(4)
p is_square(0) 
p is_square(-1)
  