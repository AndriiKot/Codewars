var min = function (list) {
  return list.reduce((a, b) => (a > b ? b : a));
};

var max = function (list) {
  return list.reduce((a, b) => (a < b ? b : a));
};

console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
