function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

// Sample Tests:
console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
