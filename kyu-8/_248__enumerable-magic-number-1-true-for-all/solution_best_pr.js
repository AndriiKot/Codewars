function all1(arr, fun) {
  return arr.every(fun);
}

// My solution
function all2(arr, fun) {
  return arr.filter(fun).length === arr.length;
}
