function countSheeps(sheep) {
  return sheep.reduce((a, b) => a + (b ? 1 : 0), 0);
}
