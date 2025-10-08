function countBy(x, n) {
  const arr = Array.from({ length: n }, (_, i, step = x) => i * step + x);
  return arr;
}

// Sample Tests:
console.log(countBy(2, 5));
console.log(countBy(1, 10));
console.log(countBy(5, 5));
