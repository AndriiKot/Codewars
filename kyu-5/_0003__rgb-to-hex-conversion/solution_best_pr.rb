def rgb1(r, g, b)
  "%.2X%.2X%.2X" % [r,g,b].map{|i| [[i,255].min,0].max}
end

def rgb(r, g, b)
  '%02X' * 3 % [r, g, b].map{ |x| x.clamp(0, 255) }
end