def is_isogram(string)
  !string.downcase.split("").uniq!
end