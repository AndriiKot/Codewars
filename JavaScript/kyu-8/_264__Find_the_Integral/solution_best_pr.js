// Codewars solution
function integrate1(coeff, exp) {
  return coeff / ++exp + "x^" + exp;
}

// My solution
function integrate2(coefficient, exponent) {
  let secondExponent = exponent + 1;
  return `${coefficient / secondExponent}x^${secondExponent}`;
}
