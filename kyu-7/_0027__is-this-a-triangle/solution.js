function isTriangle(a, b, c) {
  const sides = [a, b, c].sort((x, y) => y - x);
  let res = false;
  if (sides[2] > 0) res = sides[0] < sides[1] + sides[2];
  return res;
}

console.log(isTriangle(4, 2, 3));
