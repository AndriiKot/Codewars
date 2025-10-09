def comp(array1, array2)
  res = true
  unless array1 && array2 
    res = false 
  else
    array1.sort!
    array2.sort!
    array1.each_with_index do |el, i|
      if array1[i] ** 2 != array2[i]
        res = false
        break
      end
    end
  end
  res
end
