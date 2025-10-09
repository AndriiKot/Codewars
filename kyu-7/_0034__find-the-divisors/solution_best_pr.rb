def divisors(n)
  vals = (2..n/2).select{|x| n%x==0}
  vals.empty? ? "#{n} is prime" : vals
end
