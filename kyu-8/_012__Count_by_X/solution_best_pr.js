const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);

// Sample Tests:
console.log(countBy(2, 5));
console.log(countBy(1, 10));
console.log(countBy(5, 5));
