function getMiddle(s) {
  const len = s.length;
  const i = Math.floor((len - 1) / 2);
  return s.slice(i, len - i) || s[i];
}

console.log(getMiddle('ss'));
