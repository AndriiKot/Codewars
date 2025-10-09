const reverseSeq = (n) => {
  return Array.from({ length: n }, (v, k) => n - k);
};

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
