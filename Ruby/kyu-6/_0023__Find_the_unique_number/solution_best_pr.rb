def find_uniq(arr)
  arr.uniq.min_by { |n| arr.count(n) }
end

# or

def find_uniq(arr)
  arr.uniq.find { |n| arr.count(n) == 1 }
end

# or 

def find_uniq(arr)
  arr.uniq.each { |x| return x if arr.count(x) == 1 }
end
