function isVow(arr) {
  const vowels = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const chr = vowels[arr[i]];
    chr ? (arr[i] = chr) : arr[i];
  }
  return arr;
}

isVow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
isVow([97, 101, 105, 111, 117]);
