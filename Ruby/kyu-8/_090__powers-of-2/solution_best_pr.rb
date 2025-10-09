def powers_of_two(n)
  (0...n).map { |k| 1 << k }
end
