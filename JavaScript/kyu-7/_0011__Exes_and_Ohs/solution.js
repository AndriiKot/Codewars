function XO(str) {
  str = str.toLowerCase();
  return (str.match(/o/g) || []).length === (str.match(/x/g) || []).length;
}
