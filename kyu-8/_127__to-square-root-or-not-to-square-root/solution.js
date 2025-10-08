function squareOrSquareRoot(array) {
  const newArray = Array.from({ length: array.length }, (_, i) => {
    const element = array[i];
    return Math.sqrt(element) % 1 == 0 ? Math.sqrt(element) : element ** 2;
  });
  return newArray;
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
