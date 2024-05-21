function distinct(arr) {
  return [...new Set(arr)];
}

console.log(distinct([1, 1, 2, 2, 2, 3, 4, 4]));
