function isValid(formula) {
  if (!formula.includes(7) && !formula.includes(8)) return false;
  if (formula.includes(3) && formula.includes(4)) return false;
  if (formula.includes(1) && formula.includes(2)) return false;
  if (!(!formula.includes(5) || formula.includes(6))) return false;
  if (!(formula.includes(5) || !formula.includes(6))) return false;
  return true;
}

// sample tests
console.log(isValid([1, 3, 7])); // true
console.log(isValid([1, 3, 5, 7])); // false
console.log(isValid([1, 5, 6, 7, 3])); // true
console.log(isValid([5, 6, 7])); // true
console.log(isValid([5, 6, 7, 8])); // true
console.log(isValid([6, 7, 8])); // false
console.log(isValid([7, 8])); // true
