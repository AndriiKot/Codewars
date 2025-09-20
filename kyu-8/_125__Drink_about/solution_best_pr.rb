DRINK_RULES = {
  (21..) => 'whisky',
  (18..20) => 'beer',
  (14..17) => 'coke',
  (..14) => 'toddy',
}

def people_with_age_drink(age)
  DRINK_RULES.each do |range, drink|
    return "drink #{drink}" if range.include? age
  end
end

# or

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

