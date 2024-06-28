function uniTotal(string) {
  let sum = 0;
  for (let char of string) {
    sum += char.charCodeAt(0);
  }
  return sum;
}
