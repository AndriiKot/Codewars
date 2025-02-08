def duplicate_count(text)
  letters = Hash.new(0)
  text.downcase.each_char { |c| letters[c] += 1}
  letters.values.count { |count| count > 1 }
end

