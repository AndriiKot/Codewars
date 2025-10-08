function between(a, b) {
  const len = (a > 0 ? b - a : b + a * -1) + 1;
  const arr = Array.from({ length: len }, () => a++);
  return arr;
}

console.log(between(-2, 2));
