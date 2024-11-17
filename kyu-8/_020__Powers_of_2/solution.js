function powersOfTwo(n) {
  const arr = Array.from({ length: n + 1 }, (_, i) => Math.pow(2, i));
  return arr;
}

// sample tests
console.log(powersOfTwo(0)); // [1]
console.log(powersOfTwo(1)); // [1, 2]
console.log(powersOfTwo(4)); // [1, 2, 4, 8, 16]
