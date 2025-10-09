const mathOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const arithmetic = (a, b, operator) => {
  return mathOperations[operator](a, b);
};

console.log(arithmetic(1, 2, 'add'));
