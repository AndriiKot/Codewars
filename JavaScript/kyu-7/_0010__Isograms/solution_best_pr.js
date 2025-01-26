function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}
