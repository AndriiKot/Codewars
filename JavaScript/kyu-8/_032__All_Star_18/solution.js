function strCount(str, letter) {
  let count = 0;
  for (const char of str) {
    if (char == letter) count++;
  }
  return count;
}

console.log(strCount("Hello", "o"));

