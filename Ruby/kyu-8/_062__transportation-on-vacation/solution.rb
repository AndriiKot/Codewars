RENTAL_CAR_DAILY_RATE = 40

DISCOUNT_THRESHOLDS = {
  "days" => {
    7 => { "dollars" => 50 },
    3 => { "dollars" => 20 },
    0 => { "dollars" => 0  },
  } 
}

def validate_days(days)
  (days.is_a?(Integer) && days > 0) ? days : 0
end

def calculate_rental(days)
  RENTAL_CAR_DAILY_RATE * days
end                    

def rental_car_cost(days)
  days = validate_days(days)
  DISCOUNT_THRESHOLDS["days"].each do | thresholds, discount |
    return calculate_rental(days) - discount["dollars"] if days >= thresholds
  end
end

p rental_car_cost(1)