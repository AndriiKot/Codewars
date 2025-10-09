def find_difference(a, b)
  (a.inject(:*) - b.inject(:*)).abs
end