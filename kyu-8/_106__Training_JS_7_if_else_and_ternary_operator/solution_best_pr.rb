PRICES = {
  10 => 90,
  5 => 95,
  1 => 100,
  0 => 0,
}

def sale_hotdogs(n)
  n * PRICES.find { |(quantity, unit_price)| n >= quantity }.last
end