function swapValues1() {
  return arguments[0].reverse();
}

// My solution
function swapValues2(arr) {
  const temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;
}
