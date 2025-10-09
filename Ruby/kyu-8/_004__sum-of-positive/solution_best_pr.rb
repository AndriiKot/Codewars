def positive_sum(arr)
  arr.inject(0) { |sum, int| int > 0 ? sum + int : sum }
end
