def remove_exclamation_marks(s)
  s.gsub(/[!]/, '')
end


p remove_exclamation_marks("!!!Hello World!")
p remove_exclamation_marks("")
