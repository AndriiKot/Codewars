function fakeBin(x) {
  let newStringDigits = "";
  for (let char of x) {
    newStringDigits += char = Number(char) < 5 ? "0" : "1";
  }
  return newStringDigits;
}

console.log(fakeBin("45385593107843568"));
