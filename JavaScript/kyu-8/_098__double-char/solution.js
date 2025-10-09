function doubleChar(str) {
  let doubleString = '';
  for (char of str) {
    doubleString += char + char;
  }
  return doubleString;
}

console.log(doubleChar('String'));
