function maps(x) {
  return x.map((x) => x * 2);
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(maps(arr1)); // [2, 4, 6]
console.log(arr1); // [1, 2, 3]
