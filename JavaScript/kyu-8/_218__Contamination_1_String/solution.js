function contamination(text, char) {
  let newStr = '';
  len = text.length;
  for (let i = 0; i < len; i++) {
    newStr += char;
  }
  return newStr;
}
