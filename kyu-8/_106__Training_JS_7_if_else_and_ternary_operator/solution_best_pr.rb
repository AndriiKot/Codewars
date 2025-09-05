def sale_hotdogs(n)
  discount_map = {
    ->(x) { x >= 10 }         => 90,
    ->(x) { (5...10).include? x } => 95,
    ->(_) { true }          => 100
  }
  price = discount_map.find { |cond, _| cond[n] }.last
  price * n
end

p sale_hotdogs(5)  
