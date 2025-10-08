function twoHighest(arr) {
  let result = [];
  if (arr.length > 1) {
    const uniqueNumbers = new Set(arr);
    const sortedArray = Array.from(uniqueNumbers).sort((a, b) => a - b);
    result = [sortedArray.at(-1), sortedArray.at(-2)];
  } else if (arr.length === 1) {
    result = [arr[0]];
  }
  return result;
}
