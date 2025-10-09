def find_nb(m)
  n = 0
  while m > 0 
    n += 1
    m -= n ** 3
  end
  m == 0 ? n : -1
end