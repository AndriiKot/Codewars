def sum_mix(x) = x.map(&:to_i).sum

p sum_mix([1, '2', 3])