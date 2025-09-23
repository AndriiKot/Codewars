def no_boring_zeros(num)
  num.to_s.gsub(/0*$/, '').to_i
end