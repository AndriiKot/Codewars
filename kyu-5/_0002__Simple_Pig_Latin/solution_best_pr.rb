def pig_it text
  text.gsub(/(\w)(\w+)*/, '\2\1ay')
end