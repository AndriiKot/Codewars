var find_average1 = (array) => {
  return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0) / array.length;
};

function findAverage2(array) {
  const len = array.length;
  let result = 0;
  result = len > 0 ? array.reduce((a, b) => a + b, 0) / len : result;
  return result;
}
