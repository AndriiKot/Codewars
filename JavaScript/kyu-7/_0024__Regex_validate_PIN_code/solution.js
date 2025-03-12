function validatePIN(pin) {
  return /^\d{4}(\d{2})?$/.test(pin);
}
