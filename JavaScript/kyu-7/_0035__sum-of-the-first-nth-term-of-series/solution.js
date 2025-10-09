function SeriesSum(n) {
  let res = 1;
  const step = 3;
  let divider = 1;
  while (n > 1) {
    res += 1 / (divider += step);
    n--;
  }

  return n === 0 ? '0.00' : res.toFixed(2);
}

/*
or 
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}

or
function SeriesSum(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}
*/
