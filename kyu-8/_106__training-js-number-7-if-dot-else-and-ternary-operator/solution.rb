def sale_hotdogs(n)
  discount_map = {
    ->(x) { x >= 10 }         => 90,
    ->(x) { (5...10).include? x } => 95,
    ->(_) { true }          => 100
  }

  discount_map.each do |cond, price|
    return n * price if cond[n]
  end
end

p sale_hotdogs(10)  
