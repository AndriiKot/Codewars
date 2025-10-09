function findAverage(array) {
  const len = array.length;
  let result = 0;
  result = len > 0 ? array.reduce((a, b) => a + b, 0) / len : result;
  return result;
}
