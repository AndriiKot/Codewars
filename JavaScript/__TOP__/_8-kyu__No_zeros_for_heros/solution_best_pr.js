function noBoringZeros(n) {
  return +n.toString().replace(/0+$/g, '');
}

console.log(noBoringZeros(14000)); // 14
console.log(noBoringZeros(12000)); // 12
