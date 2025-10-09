RENTAL_CAR_DAILY_RATE = {
    "day": 40,
}

DISCOUNT_AMOUNTS = {
    "max": 50,
    "middle": 20,
    "default": 0,
}

DISCOUNT_THRESHOLDS = {
    7: DISCOUNT_AMOUNTS["max"],
    3: DISCOUNT_AMOUNTS["middle"],
    0: DISCOUNT_AMOUNTS["default"], 
}

def validate_days(days):
    if isinstance(days, int) and days > 0:
        return days
    return 0

def calculate_rental_car_cost_without_discount(days):
    return days * RENTAL_CAR_DAILY_RATE["day"]

def rental_car_cost(days):
    days = validate_days(days)
    for days_threshold, discount in DISCOUNT_THRESHOLDS.items():
        if days >= days_threshold:  
            return calculate_rental_car_cost_without_discount(days) - discount 

print(rental_car_cost(7))  # Output: 230
