def persistence(n)
  n < 10 ? 0 : 1 + persistence(n.to_s.chars.map(&:to_i).reduce(:*))
end

# or

def persistence(n)
  k = 0
   while n > 9 do
    n = n.to_s.split(//).map{|x| x.to_i}.inject(:*)
    k+=1
   end
  k 
end

# or

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
