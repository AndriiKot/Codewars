function closeCompare(a, b, margin = 0) {
  let result = 1;
  if (Math.abs(a - b) <= margin) {
    result = 0;
  } else if (a < b) {
    result = -1;
  }
  return result;
}
