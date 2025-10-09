def sum_array(arr)
  arr.nil? || arr.empty? ? 0 : arr.sort[1..-2].reduce(0, :+)
end