function numberToPower1(number, power) {
  var total = 1;
  for (var i = 1; i <= power; i++) {
    total = total * number;
  }
  return total;
}

// My Solution
function numberToPower2(number, power) {
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
