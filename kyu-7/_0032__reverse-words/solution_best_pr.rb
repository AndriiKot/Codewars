def reverse_words(str)
  new_string = ''
  word = ''
  str.each_char.with_index do |chr, i|
    new_string += (word + chr).reverse if i == str.size - 1
    if chr == ' ' 
      new_string += (word.reverse)
      new_string += chr
      word = ''
    else 
      word += chr
    end      
  end
  new_string
end

p reverse_words('double  spaced  words')
