def dig_pow(n, p)
  powers = [*p..n.to_s.size + p]
  nums = n.digits.reverse!
  sum = nums.zip(powers).map! {|num, pow| num ** pow }.sum 
  (sum % n).zero? ? sum / n : -1
end


p dig_pow(89, 1)  # 1
p dig_pow(92, 1)  # -1
p dig_pow(46288, 3) # 51


p dig_pow(89, 1)
# p dig_pow(92, 1)
p dig_pow(46288, 3)