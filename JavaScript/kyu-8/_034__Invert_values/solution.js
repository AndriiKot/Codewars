function invert(array) {
  const newArr = Array.from({ length: array.length }, (el, i) => array[i] * -1);
  return newArr;
}
