def dig_pow(n, p)
    total = n.to_s.split('').map.with_index{|d, i| d.to_i ** (p+i)}.reduce(:+)
    total % n == 0 ? (total / n) : -1
end

# or

def dig_pow(n, p)
  sum = n.digits.reverse.each_with_index.sum{ |d, i| d ** (p + i) }
  
  sum % n == 0 ? sum / n : -1
end