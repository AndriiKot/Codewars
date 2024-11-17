function logicalCalc(array, op) {
  let result = array[0];
  const len = array.length;
  for (let i = 1; i < len; i++) {
    if (op === 'AND') {
      result = result && array[i];
    } else if (op === 'OR') {
      result = result || array[i];
    } else if (op === 'XOR') {
      result = result !== array[i];
    }
  }
  return result;
}

console.log(logicalCalc([true, true, false], 'AND')); // false
console.log(logicalCalc([true, true, false], 'OR')); // true
console.log(logicalCalc([true, true, false], 'XOR')); // false
