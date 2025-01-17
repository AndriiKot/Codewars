function squareDigits(num) {
  const str = num.toString();
  const arr = str.split('');
  const fnSquare = (chr) => chr ** 2;
  const newStr = arr.reduce((acc, current) => acc + fnSquare(current), '');
  return +newStr;
}

console.log(squareDigits(55));
