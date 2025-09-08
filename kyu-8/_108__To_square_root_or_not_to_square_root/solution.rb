def square_or_square_root(arr)
  arr.map do |num|
    num_sqrt = Math.sqrt(num)
    num_sqrt_int = num_sqrt.to_i
    num_sqrt_int == num_sqrt ? num_sqrt_int : num ** 2
  end
end