function isDigit1(s) {
  return s == parseFloat(s);
}

// My solution
function isDigit(s) {
  s = s.trim();
  return /^(-)?[0-9]+(\.[0-9]+)?$/.test(s);
}
