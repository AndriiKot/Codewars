const reverseSeq1 = (length) => Array.from({ length }, () => length--);

const reverseSeq2 = (n) => {
  return Array.from({ length: n }, (v, k) => n - k);
};
