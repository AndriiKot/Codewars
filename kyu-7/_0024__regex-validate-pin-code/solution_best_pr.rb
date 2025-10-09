def validate_pin(pin)
  pin.match? /\A\d{4}(\d{2})?\z/
end