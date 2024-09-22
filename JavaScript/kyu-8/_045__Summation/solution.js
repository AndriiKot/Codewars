var summation = function (num) {
  let result = 0;
  while (num > 0) {
    result += num;
    num--;
  }
  return result;
};
