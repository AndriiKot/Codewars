def count_chars(s)
  dict = Hash.new(0)
  s.each_char { |ch| dict[ch] += 1 }
  dict
end
