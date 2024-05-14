function correct(string) {
  let newString = "";
  const len = string.length;
  const stringFixed = {
    0: "O",
    1: "I",
    5: "S",
  };

  for (let i = 0; i < len; i++) {
    const char = string[i];
    const fixed = stringFixed[char];
    newString += fixed ? fixed : char;
  }

  return newString;
}

console.log(correct("L0ND0N"));
