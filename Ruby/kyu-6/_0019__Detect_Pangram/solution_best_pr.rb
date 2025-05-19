def panagram?(string)
   string.downcase.scan(/[a-z]/).uniq.size == 26
end

# or

def panagram?(s)
  ("A".."Z").to_a - s.upcase.chars == []
end