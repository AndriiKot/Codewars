function pickIt(arr) {
  var odd = [];
  var even = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] & 1) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }

  return [odd, even];
}

console.log(pickIt([1, 2, 3, 4, 5, 6, 7, 8]));
