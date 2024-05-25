function fakeBin1(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}

function fakeBin2(x) {
  let newStringDigits = "";
  for (let char of x) {
    newStringDigits += char = Number(char) < 5 ? "0" : "1";
  }
  return newStringDigits;
}
