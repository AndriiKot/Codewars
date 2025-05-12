def alphabet_position(text)
  text.gsub(/[^a-z]/i, '').chars.map{ |c| c.downcase.ord - 96 }.join(' ')
end