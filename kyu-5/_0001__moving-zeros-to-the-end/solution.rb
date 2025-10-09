def moveZeros(arr)
  len = arr.size
  arr.select! { |el| el != 0 }
  arr + Array.new(len - arr.size, 0)
end
