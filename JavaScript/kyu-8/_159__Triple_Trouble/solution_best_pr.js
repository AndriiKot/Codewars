function tripleTrouble(one, two, three) {
  let newString = '';
  const len = one.length;
  for (let i = 0; i < len; i++) {
    newString += one[i] + two[i] + three[i];
  }
  return newString;
}
