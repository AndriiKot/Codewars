def average(array)
  array.empty? ? 0 : array.sum.fdiv(array.size)
end