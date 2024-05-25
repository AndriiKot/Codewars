function firstNonConsecutive(arr) {
  let step = arr[0];
  const len = arr.length;
  let intNonConsecutive = null;

  for (let i = 0; i < len; i++) {
    if (arr[i] != step) {
      intNonConsecutive = arr[i];
      break;
    }
    step++;
  }

  return intNonConsecutive;
}

console.log(firstNonConsecutive([1, 2, 3, 4]));
