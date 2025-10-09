def digital_root1(n)
  n < 10 ? n : digital_root(n.digits.sum)
end

def digital_root2(n)
  n < 10 ? n : digital_root(n / 10 + n % 10)
end