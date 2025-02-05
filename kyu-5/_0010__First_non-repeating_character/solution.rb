def  first_non_repeating_letter(s) 
  new_string = s.upcase
  chars = {}
  chars.default = 0
  new_string.each_char { |c| chars[c] += 1}
  uniq_char = chars.find { |k, v| v == 1 }&.first
  uniq_char ? s[new_string.index(uniq_char)] : ''
end

first_non_repeating_letter('sfasf')