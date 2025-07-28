def is_anagram(test, original)
  test.downcase.chars.sort == original.downcase.chars.sort
end