function sameCase(a, b) {
  const regex = /[^a-z]/i;
  if (regex.test(a) || regex.test(b)) return -1;
  if (a === a.toUpperCase() && b === b.toUpperCase()) return 1;
  if (a === a.toLowerCase() && b === b.toLowerCase()) return 1;
  return 0;
}

// Sample tests
console.log(sameCase("F", "A"));
console.log(sameCase("b", "c"));
console.log(sameCase("c", "C"));
console.log(sameCase("d", "23"));
