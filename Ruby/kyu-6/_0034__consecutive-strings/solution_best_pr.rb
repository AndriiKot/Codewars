def longest_consec(str_arr, k)
  longest = ''
  if k > 0 && k <= str_arr.size
    (0..(str_arr.size - k)).each do |i|
      combined = str_arr[i, k].join
      longest = combined if combined.size > longest.size
    end
  end
  longest
end