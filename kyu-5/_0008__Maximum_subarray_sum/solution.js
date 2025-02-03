const maxSequence = (arr) => {
  let sum = 0;
  let max = 0;
  arr.forEach((int) => {
    sum += int;
    sum < 0 && (sum = 0);
    sum > max && (max = sum);
  });
  return max;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
