
def max_sequence1(arr)
  return 0 if arr.empty?

  max_ending_here = max_so_far = 0
  
  arr.each do |n|
    max_ending_here = [n, max_ending_here + n].max
    max_so_far = [max_so_far, max_ending_here].max
  end
  
  max_so_far
end

def max_sequence2(arr)
  sum = 0
  max = 0
  for i in 0...arr.length
    sum += arr[i]
    
    if sum < 0
      sum = 0
    end
    
    if sum > max
      max = sum
    end
  end
  max
end