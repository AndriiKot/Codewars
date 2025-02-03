def max_sequence(arr)
  res = 0
  arr.reverse!
  len = arr.size
  while len > 0 do
    len.times do |i|
      sum_sub_arr = arr[i..-1].sum
      res = res <= sum_sub_arr ? sum_sub_arr : res
    end
      arr.pop
      len = arr.size
    end
  res
end

p max_sequence [-2, 1, -3, 4, -1, 2, 1, -5, 4]
