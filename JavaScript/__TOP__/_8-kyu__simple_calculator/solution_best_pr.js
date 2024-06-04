function calculator(a, b, sign) {
  if (!isNaN(a) && !isNaN(b)) {
    switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
  }
  return "unknown value";
}
