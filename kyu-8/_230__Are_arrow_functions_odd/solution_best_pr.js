function odds1(values) {
  return values.filter((x) => x & 1);
}

// My solution
function odds2(values) {
  return values.filter((number) => (number & 1) == 1);
}
