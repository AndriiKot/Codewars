def double_char(str)
  Array.new(str.size) { |i| str[i] * 2 }.join
end


p double_char('ssssting')
