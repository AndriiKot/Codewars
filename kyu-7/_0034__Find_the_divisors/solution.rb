def divisors(n)
  arr = []
  count = 2
  while count < n
    arr.push count if n % count == 0
    count += 1
  end
  arr.size == 0 && "#{n} is prime" || arr
end

p divisors(6)