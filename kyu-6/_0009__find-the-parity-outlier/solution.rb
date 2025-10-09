def find_outlier(integers)
  res = integers.each_with_object([[],[]]) do |int, obj|
    int & 1 === 1 ? obj[0] << int : obj[1] << int
  end
  res = res[0].size === 1 ? res[0][0] : res[1][0]
end

p find_outlier([2, 4, 0, 100, 4, 11, 2602, 36]);