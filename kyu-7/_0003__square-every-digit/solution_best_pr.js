function squareDigits(num) {
  return Number(
    ('' + num)
      .split('')
      .map(function (val) {
        return val * val;
      })
      .join(''),
  );
}
