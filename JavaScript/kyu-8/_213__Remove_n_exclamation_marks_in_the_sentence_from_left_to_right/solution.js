function remove(str, n) {
  let count = 0;
  let newStr = "";
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] == "!" && count < n) {
      count++;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(remove("!!Hi!!", 1));
