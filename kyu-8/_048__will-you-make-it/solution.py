def zero_fuel(distance, mpg, fuel_left)
  distance / fuel_left.to_f <= mpg
end