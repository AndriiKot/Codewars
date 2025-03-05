def open_or_senior(data)
  Array.new(data.size) { |i| data[i][0] >= 55 && data[i][1] > 7 ? 'Senior' : 'Open' }
end

p open_or_senior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])