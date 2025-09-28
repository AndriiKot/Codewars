def add_length(str)
  str.split.map!{|word| "#{word} #{word.size}"}
end