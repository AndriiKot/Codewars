def is_valid_walk(walk) 
  res = false
  directions = {
    "n" => 0,
    "s" => 0,
    "w" => 0,
    "e" => 0,
  }
  len = walk.size
  if (4..10).include? len 
    walk.each { |dir| directions[dir] += 1}
    n, s, w, e = directions.values
    res = true if (n - s === 0 && w - e === 0)
  end
  res
end


p is_valid_walk(['n','s','n','s','n','s','n','s','n','s'])
p is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e'])
p is_valid_walk(['w'])
