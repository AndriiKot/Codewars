def find_uniq(arr)
  arr.uniq.each { |x| return x if arr.count(x) == 1 }
end
