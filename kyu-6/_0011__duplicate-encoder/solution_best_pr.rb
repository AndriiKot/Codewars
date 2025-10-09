def duplicate_encode(word)
  chars = word.downcase.chars
  count = chars.each_with_object(Hash.new(0)) { |char, count| count[char] += 1 }
  chars.map { |char| count[char] > 1 ? ")" : "(" }.join
end