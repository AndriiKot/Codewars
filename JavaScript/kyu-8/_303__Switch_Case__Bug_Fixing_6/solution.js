function evalObject({ operation, a, b }) {
  let result = 0;
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
    case "%":
      result = a % b;
      break;
    case "^":
      result = Math.pow(a, b);
      break;
  }
  return result;
}
