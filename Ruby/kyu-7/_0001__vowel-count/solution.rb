def get_count(input_str)
  count = 0
  vowels = {'a' => 0, 'e' => 0, 'i' => 0, 'o' => 0, 'u' => 0}
  input_str.each_char { |char| count += 1 if vowels.key?(char) }
  count
end

p get_count("abracadabra")

