function integrate(coefficient, exponent) {
  const secondExponent = exponent + 1;
  return `${coefficient / secondExponent}x^${secondExponent}`;
}
