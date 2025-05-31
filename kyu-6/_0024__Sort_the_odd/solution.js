function sortArray(array) {
  const oddArr = array.filter((num) => num & 1).sort((a, b) => b - a);
  const sortOnlyOddArr = Array.from(array, (el) => (el & 1 ? oddArr.pop() : el));
  return sortOnlyOddArr;
}
