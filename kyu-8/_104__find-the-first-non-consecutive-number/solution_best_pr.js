function firstNonConsecutive1(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

function firstNonConsecutive2(arr) {
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
