def find_next_square(sq)
  number = Math.sqrt(sq) + 1
  number % 1 == 0 ? number**2 : -1
end