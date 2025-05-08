def remove_smallest(numbers)
  min = numbers.min 
  flag = true
  numbers.select { |el| (flag && el == min) ? (flag = false && next) : el }
end


p remove_smallest([4,1,1,2,2,3,3])
p remove_smallest([])