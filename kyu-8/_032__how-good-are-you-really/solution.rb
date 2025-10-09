def better_than_average(arr, points)
  points > (arr.sum + points) / (arr.size + 1)
end
