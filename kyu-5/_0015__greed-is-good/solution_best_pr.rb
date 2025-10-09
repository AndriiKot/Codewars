def score(dice)
  big_win = {1 => 1000, 6 => 600, 5 => 500, 4 => 400, 3 => 300, 2 => 200}
  other_win = { 1 => 100, 5 => 50 }
  count = Hash.new(0)

  res = 0

  dice .each { |c| count[c] += 1 }  
  count.each { |k, v| count[k] = v - 3 and res += big_win[k] if v >= 3 }
       .each { |k, v| res += other_win[k] * v if other_win[k] }
  
  res   
end
