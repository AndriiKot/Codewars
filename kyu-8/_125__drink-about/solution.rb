DRINK_RULES = {
  ->(age) { age >= 21 } => 'whisky',
  ->(age) { age >= 18 } => 'beer',
  ->(age) { age >= 14 } => 'coke',
  ->(age) { true } => 'toddy',
}

def people_with_age_drink(age)
  DRINK_RULES.each do |check, drink|
    return "drink #{drink}" if check[age]
  end
end