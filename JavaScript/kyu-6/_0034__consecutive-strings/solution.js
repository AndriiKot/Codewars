function longestConsec(strArray, k) {
  const len = strArray.length - k + 1;
  let res = '';
  if (k > 0 && k <= strArray.length) {
    res = Array.from({ length: len }, (_, i) => {
      return Array.from({ length: k }, (_, j) => {
        return strArray[i + j];
      }).join('');
    }).reduce((longest, current) => (current.length > longest.length ? current : longest));
  }
  return res;
}
