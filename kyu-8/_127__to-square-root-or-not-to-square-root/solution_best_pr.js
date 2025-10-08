function squareOrSquareRoot1(array) {
  return array.map((x) => {
    const r = Math.sqrt(x);
    return r % 1 == 0 ? r : x * x;
  });
}

function squareOrSquareRoot2(array) {
  const newArray = Array.from({ length: array.length }, (_, i) => {
    const element = array[i];
    return Math.sqrt(element) % 1 == 0 ? Math.sqrt(element) : element ** 2;
  });
  return newArray;
}
