function countPositivesSumNegatives(input) {
  const arr = [];
  if (Array.isArray(input) && input.length) {
    let positive = 0;
    let negative = 0;
    const iteration = input.length;

    if (iteration) {
      for (let i = 0; i < iteration; i++) {
        input[i] > 0 ? (positive += 1) : (negative += input[i]);
      }
      arr[0] = positive;
      arr[1] = negative;
    }
  }

  return arr;
}
