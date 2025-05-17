def narcissistic?(n)
  n == n.digits.map { |d| d**n.digits.size } .sum
end