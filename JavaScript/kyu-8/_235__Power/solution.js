function numberToPower(number, power) {
  const int = number;
  if (power) {
    while (power > 1) {
      number *= int;
      power--;
    }
  } else {
    number = 1;
  }
  return number;
}

console.log(numberToPower(10, 0));
