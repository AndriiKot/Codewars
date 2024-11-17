function slope(points) {
  let result;
  const y = points[3] - points[1];
  const x = points[2] - points[0];
  if (x === 0) {
    result = 'undefined';
  } else {
    result = y / x;
  }
  return `${result}`;
}
