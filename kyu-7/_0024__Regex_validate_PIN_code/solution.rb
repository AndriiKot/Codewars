def validate_pin(pin)
  pin.match?(/^(?!.*\n)(^\d{4}$|^\d{6}$)/)  
end                     

