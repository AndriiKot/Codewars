def is_isogram(s)
  result = true
  s = s.downcase 
  s.each_char { |c| (result = false && break) if s.count(c) > 1 }
  result
end


p is_isogram('stinn2')
p is_isogram('')