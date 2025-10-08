function arr2bin1(arr) {
  return arr.reduce((x, y) => x + (typeof y == 'number' ? y : 0), 0).toString(2);
}

// My solution
function arr2bin2(arr) {
  let result = 0;
  if (arr.length) {
    result = arr.reduce((total, current) => {
      if (typeof current === 'number') {
        return total + current;
      }
      return total;
    }, 0);
  }
  return result.toString(2);
}
