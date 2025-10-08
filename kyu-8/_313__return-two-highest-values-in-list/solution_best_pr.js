// Best Practices
{
  function twoHighest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
  }
}

// My Solution
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
