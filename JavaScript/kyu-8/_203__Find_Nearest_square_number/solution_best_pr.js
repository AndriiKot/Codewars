const nearestSq1 = (n) => Math.pow(Math.round(Math.sqrt(n)), 2);

// My solution
function nearestSq2(n) {
  let res;
  const sqrt = Math.sqrt(n);
  const isInt = Number.isInteger(sqrt);
  if (isInt) {
    res = n;
  } else {
    const before_pow = Math.pow(Math.floor(sqrt), 2);
    const after_pow = Math.pow(Math.ceil(sqrt), 2);
    res = Math.abs(n - after_pow) > Math.abs(n - before_pow) ? before_pow : after_pow;
  }
  return res;
}
