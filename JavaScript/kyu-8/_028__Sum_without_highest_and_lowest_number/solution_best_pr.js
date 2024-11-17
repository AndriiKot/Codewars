function sumArray(array) {
  return Array.isArray(array) && array.length > 1 ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array) : 0;
}
