def narcissistic?(value)
  num_str = value.to_s
  digit_count = num_str.size
  sum = num_str.chars.inject(0) { |res, int| int.to_i ** digit_count + res }
  sum == value
end
