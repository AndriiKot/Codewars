function squareSum(numbers) {
  return numbers.reduce((a, b) => a + Math.pow(b, 2), 0);
}

// Sample Tests

console.log(squareSum([1, 2])); // 5
console.log(squareSum([-1, -2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50
