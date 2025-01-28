def spinWords(string)
  string.gsub(/\w{5,}/, &:reverse)
end

