def accum(s)
  new_string = ''
  s.each_char.with_index(1) do |c, i|
    new_string += "#{(c * i).capitalize}-" 
  end
    new_string[0..-2]
end

accum('abc')