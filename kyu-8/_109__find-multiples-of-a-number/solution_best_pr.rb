def find_multiples(integer, limit)
  integer.step(limit, integer).to_a
end