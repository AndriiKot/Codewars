def rgb(r, g, b)
  [r, g, b].map! do |c|
    next "FF" if c >= 255
    next "00" if c <= 0
    c.to_s(16).upcase.rjust(2, '0')
  end.join()
end


p rgb(255, 255, 255)
p rgb(0, 0, 0)
p rgb(3, 3, 3)