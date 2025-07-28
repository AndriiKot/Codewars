def is_anagram(test, original)
  test.upcase!
  original.upcase!
  test.chars.sort! == original.chars.sort!
end