def sum_array(arr)
  arr && arr.size > 2 && arr.sort.self[1..-2].sum || 0
end