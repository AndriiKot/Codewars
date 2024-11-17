function removeEveryOther1(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

function removeEveryOther2(arr) {
  return arr.filter((_, i) => !(i & 1));
}

console.log(removeEveryOther1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
