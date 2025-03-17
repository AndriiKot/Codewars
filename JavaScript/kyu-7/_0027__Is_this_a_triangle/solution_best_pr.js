function isTriangle1(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

const isTriangle2 = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;
