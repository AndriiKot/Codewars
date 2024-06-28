const uniTotal1 = (str) =>
  [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

// My solution

function uniTotal2(string) {
  let sum = 0;
  for (let char of string) {
    sum += char.charCodeAt(0);
  }
  return sum;
}
