def sum_mix(x) = x.sum(&:to_i)

p sum_mix([1, '2', 3])