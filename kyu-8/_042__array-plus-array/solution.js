function arrayPlusArray(arr1, arr2) {
  return arr1.reduce(
    (a, b) => a + b,
    arr2.reduce((a, b) => a + b, 0),
  );
}

// Sample Tests:
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
