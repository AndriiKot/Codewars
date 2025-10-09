def stray numbers
  numbers.inject {|cur, pre| cur ^ pre} 
end
