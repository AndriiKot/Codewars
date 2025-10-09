const between1 = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i);

function between2(a, b) {
  const len = (a > 0 ? b - a : b + a * -1) + 1;
  const arr = Array.from({ length: len }, () => a++);
  return arr;
}
