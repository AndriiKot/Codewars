const findAverage1 = (nums) => nums.reduce((a, b) => a + b) / nums.length;

var findAverage2 = function (nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};
