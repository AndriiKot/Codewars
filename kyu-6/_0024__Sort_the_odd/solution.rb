def sort_array(array)
  odd_array = array.select { |num| num & 1 == 1}.sort!.reverse!
  array.map { |num| num & 1 == 1 ? odd_array.pop : num } 
end
