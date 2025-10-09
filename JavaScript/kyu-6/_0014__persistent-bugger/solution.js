function persistence(num) {
  let count = 0;
  let numToStr = num.toString();
  let len = numToStr.length;
  while (len > 1) {
    numToStr = numToStr
      .split('')
      .reduce((acc, val) => acc * +val, 1)
      .toString();
    len = numToStr.length;
    count++;
  }
  return count;
}
