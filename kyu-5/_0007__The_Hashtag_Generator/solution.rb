def generateHashtag(str)
  new_string = str.split.map!{|w| w.capitalize }.join('')
  len = new_string.size
  len < 140 && len > 0 && "##{new_string}" 
end

p generateHashtag('string string string')
p generateHashtag('')
str = '1' * 144
p generateHashtag('Do We have A Hashtag')