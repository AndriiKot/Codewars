def find_difference(a, b)
  ((a).reduce(:*) - (b).reduce(:*)).abs
end