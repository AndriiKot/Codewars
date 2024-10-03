function mergeArrays(a, b) {
  const newArray = [...a, ...b];
  newArray.sort((a, b) => a - b);
  return [...new Set(newArray)];
}
