function sumMul(n, m) {
  let res = 0;
  if (n < m) {
    const step = n;
    while (n < m) {
      res += n;
      n += step;
    }
  }
  return res || "INVALID";
}

console.log(sumMul(2, -9));
console.log(sumMul(2, 9));
