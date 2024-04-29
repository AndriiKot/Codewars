var summation1 = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

const summation2 = (n) => (n * (n + 1)) / 2;
