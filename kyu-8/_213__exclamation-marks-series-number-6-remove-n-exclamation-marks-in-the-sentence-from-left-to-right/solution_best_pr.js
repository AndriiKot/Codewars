function remove1(s, n) {
  for (var i = 0; i < n; i++) s = s.replace('!', '');
  return s;
}

// My solution
function remove2(str, n) {
  let count = 0;
  let newStr = '';
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] == '!' && count < n) {
      count++;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
