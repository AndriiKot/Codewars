function arr2bin(arr) {
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
