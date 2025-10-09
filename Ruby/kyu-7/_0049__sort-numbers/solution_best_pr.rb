def solution(nums)
  Array(nums).sort
end

# or

def solution(nums)
  nums ? nums.sort : []
end

# or 

def solution(nums)
  nums.to_a.sort
end

# or

def solution(nums)
  (nums or []).sort
end

# or

def solution(nums)
 nums.sort rescue []
end

# or

def solution(nums)
  [*nums].sort
end
