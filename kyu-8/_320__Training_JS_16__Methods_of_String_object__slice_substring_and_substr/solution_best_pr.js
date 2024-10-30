function cutIt(arr) {
  const minWords = arr.reduce((a, b) => (a.length < b.length ? a : b));
  const lenMinWords = minWords.length;
  const newArr = arr.map((word) => word.slice(0, lenMinWords));
  return newArr;
}
