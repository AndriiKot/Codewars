const digPow = (n, p) => {
  const sum = n
    .toString()
    .split('')
    .reduce((acc, cur, i) => {
      return acc + cur ** (i + p);
    }, 0);
  return sum % n ? -1 : sum / n;
};

console.log(digPow(89, 1));
