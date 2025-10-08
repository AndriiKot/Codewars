function isDigit(s) {
  s = s.trim();
  return /^(-)?[0-9]+(\.[0-9]+)?$/.test(s);
}
