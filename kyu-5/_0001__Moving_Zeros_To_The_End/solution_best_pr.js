function moveZeros(arr) {
  return arr.sort((a, b) => (b === 0 ? -1 : 0));
}
