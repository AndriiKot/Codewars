function narcissistic(value) {
  const numStr = value.toString();
  const digitCount = numStr.length;
  const sum = [...numStr].reduce((acc, digit) => {
    return acc + Math.pow(+digit, digitCount);
  }, 0);
  return value === sum;
}
