function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split('')
      .reduce((t, c) => c * t);
  }
  return i;
}

// or

{
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
}
