function doubleChar1(str) {
  return str.replace(/(.)/g, '$1$1');
}

function doubleChar2(str) {
  let doubleString = '';
  for (char of str) {
    doubleString += char + char;
  }
  return doubleString;
}
