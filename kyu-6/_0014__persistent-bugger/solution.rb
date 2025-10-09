def persistence(n)
  times = 0
  int_to_str = n.to_s
  len = int_to_str.size
  while len > 1
    int_to_str = int_to_str.split('').inject {|cur, pre| cur.to_i * pre.to_i }.to_s
    len = int_to_str.size
    times += 1
  end
  times  
end

persistence(339)
