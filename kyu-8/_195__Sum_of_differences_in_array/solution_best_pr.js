function sumOfDifferences(arr) {
  let res = 0;
  const len = arr.length;
  if (len > 1) {
    arr.sort((a, b) => b - a);
    for (let i = 0; i < len - 1; i++) {
      res += arr[i] - arr[i + 1];
    }
  }
  return res;
}

console.log(sumOfDifferences([1, 2, 10]));
