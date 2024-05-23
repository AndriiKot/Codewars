function multipleOfIndex(array) {
  return array.filter((el, i) => Math.abs(el) % i == 0 || el == 0);
}
