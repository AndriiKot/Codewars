function eachCons(array, n) {
  const maxLen = array.length - n + 1;
  const NewArr = Array.from({ length: maxLen }, (_, i) => array.slice(i, i + n));
  return NewArr;
}

console.log(eachCons([1, 2, 3, 4], 2)); //  [[1,2], [2,3], [3,4]]
console.log(eachCons([1, 2, 3, 4], 3)); // [[1,2,3],[2,3,4]]
