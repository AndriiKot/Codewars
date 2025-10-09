const sequenceSum = (begin, end, step) => {
  let count = 0;
  for (begin; begin <= end; begin += step) {
    count += begin;
  }
  return count;
};

console.log(sequenceSum(1, 3, 2));
