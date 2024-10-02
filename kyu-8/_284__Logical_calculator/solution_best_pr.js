// Best Praxes
var ops = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => a !== b,
};

function logicalCalc1(array, op) {
  return array.reduce(ops[op]);
}

// My Solution
function logicalCalc2(array, op) {
  let result = array[0];
  const len = array.length;
  for (let i = 1; i < len; i++) {
    if (op === "AND") {
      result = result && array[i];
    } else if (op === "OR") {
      result = result || array[i];
    } else if (op === "XOR") {
      result = result !== array[i];
    }
  }
  return result;
}

console.log(logicalCalc1([true, true, false], "AND")); // false
console.log(logicalCalc1([true, true, false], "OR")); // true
console.log(logicalCalc1([true, true, false], "XOR")); // false

console.log(logicalCalc2([true, true, false], "AND")); // false
console.log(logicalCalc2([true, true, false], "OR")); // true
console.log(logicalCalc2([true, true, false], "XOR")); // false
