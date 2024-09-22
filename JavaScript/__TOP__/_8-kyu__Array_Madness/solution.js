function arrayMadness(a, b) {
  return a.reduce((a, b) => a + b ** 2, 0) > b.reduce((a, b) => a + b ** 3, 0);
}
