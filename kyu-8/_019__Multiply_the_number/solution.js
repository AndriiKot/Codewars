function multiply(number) {
  const intExp = number >= 0 ? (number + "").length : (number + "").length - 1;
  return number * 5 ** intExp;
}

