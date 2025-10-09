def two_sum(numbers, target)
  seen = {}
  numbers.each_with_index do |num, i|
    complement = target - num
    return [seen[complement], i] if seen.key?(complement)
    seen[num] = i
  end
  []
end