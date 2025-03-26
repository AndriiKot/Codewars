def number(bus_stops)
  bus_stops.sum { |up, down| up - down }
end