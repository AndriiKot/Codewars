function longestConsec(strArray, k) {
  if (k <= 0 || k > strArray.length) return '';

  let longest = '';
  for (let startIndex = 0; startIndex <= strArray.length - k; startIndex++) {
    const combined = strArray.slice(startIndex, startIndex + k).join('');
    if (combined.length > longest.length) {
      longest = combined;
    }
  }

  return longest;
}
