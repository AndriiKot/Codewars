def number(bus_stops)
  bus_stops.reduce(0) { |passengers,(on, off)| passengers += on - off }
end
