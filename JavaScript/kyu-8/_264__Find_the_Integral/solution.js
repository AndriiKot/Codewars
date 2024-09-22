function integrate(coefficient, exponent) {
  let secondExponent = exponent + 1;
  return `${coefficient / secondExponent}x^${secondExponent}`;
}
