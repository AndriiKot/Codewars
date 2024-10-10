function howManySmaller(arr, n) {
  let count = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    arr[i] = Math.round(arr[i] * 100) / 100;
    if (arr[i] < n) {
      count++;
    }
  }
  return count;
}
{
  function howManySmaller(arr, n) {
    return arr.reduce(
      (count, num) => (Math.round(num * 100) / 100 < n ? count + 1 : count),
      0
    );
  }
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24)); // 2;
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)); // 1;
