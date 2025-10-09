function moveZeros(arr) {
  return arr.sort((a, b) => {
    return (a === 0 ? 1 : 0) - (b === 0 ? 1 : 0);
  });
}
