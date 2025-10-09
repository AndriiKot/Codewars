def moveZeros(arr) 
  arr.sort_by{|num|  num == 0 ? 1 : 0}
end
