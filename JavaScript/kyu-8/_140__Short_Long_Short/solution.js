function solution(a, b) {
  const longString = a.length > b.length ? a : b;
  const shortString = a.length > b.length ? b : a;
  return shortString + longString + shortString;
}
