function contamination1(text, char) {
  return char.repeat(text.length);
}

// My solution
function contamination2(text, char) {
  let newStr = "";
  len = text.length;
  for (let i = 0; i < len; i++) {
    newStr += char;
  }
  return newStr;
}
