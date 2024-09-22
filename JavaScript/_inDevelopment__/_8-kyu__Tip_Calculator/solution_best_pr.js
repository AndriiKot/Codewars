const v = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };
const isVow1 = (a) => a.map((x) => v[x] || x);

// My solution

function isVow(arr) {
  const vowels = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const chr = vowels[arr[i]];
    chr ? (arr[i] = chr) : arr[i];
  }
  return arr;
}
