def in_array(arr1, arr2)
  arr1.sort!
  str = arr2.join
  res = arr1.inject([]) do |acc, cur|
    acc << cur if str.include?(cur)
    acc
  end
  res
end
