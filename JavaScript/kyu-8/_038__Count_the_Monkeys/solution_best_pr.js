function monkeyCount(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

// function monkeyCount(n) {
//   for (var i = 0, arr = []; i < n; arr.push(++i));

//   return arr;
// }
