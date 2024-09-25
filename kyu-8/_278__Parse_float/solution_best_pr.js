function parseF(s) {
  let result = parseFloat(s);
  if (isNaN(result)) {
    result = null;
  }
  return result;
}
