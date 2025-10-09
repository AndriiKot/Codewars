def row_sum_odd_numbers(n)
  x, y = 0, 1
  arr = []
  1.upto(n) do |i|
    x += i 
  end
  x.times do |i|
    arr << y
    y += 2
  end
  arr[-n..-1].sum
end

p row_sum_odd_numbers(5)