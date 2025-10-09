def validate_pin(pin):
    return bool(re.fullmatch("\d{4}|\d{6}", pin))