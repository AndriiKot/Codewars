def pangram?(string)
  pangram_size = string.gsub(/\W|\d/, '').downcase.chars.uniq.size
  pangram_size == 26
end
