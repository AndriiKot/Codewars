def get_middle(s)
  len = s.size
  return s if len < 2
  mid = len / 2
  return s[mid] if len.odd? 
  return s[mid - 1 .. mid] if len.even?
end


p get_middle('stts')