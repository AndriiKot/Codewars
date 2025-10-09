function sc(floor) {
  let result = '';
  const constructorArray = (len, el) => Array.from({ length: len }, () => el);

  if (floor > 1) {
    let arr;
    if (floor < 7) {
      arr = constructorArray(floor + 1, 'Aa~');
      arr[arr.length - 2] = 'Pa!';
      arr[arr.length - 1] = 'Aa!';
    } else {
      arr = constructorArray(floor, 'Aa~');
      arr[arr.length - 1] = 'Pa!';
    }
    result = arr.join(' ');
  }
  return result;
}

console.log(sc(7)); // Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!
console.log(sc(6)); // Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!
console.log(sc(10)); // Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!
