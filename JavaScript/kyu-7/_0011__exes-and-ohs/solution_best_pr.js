function XO(str) {
  return (str.match(/o/gi) || []).length === (str.match(/x/gi) || []).length;
}
