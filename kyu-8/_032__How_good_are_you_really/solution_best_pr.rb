def better_than_average(arr, points)
  arr.inject(:+) / arr.length < points
end