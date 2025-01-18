function highAndLowV1(numbers) {
  var numArray = numbers.split(' ');
  var max = Number(numArray[0]);
  var min = Number(numArray[0]);
  var num;

  for (var i = 1; i < numArray.length; i++) {
    num = Number(numArray[i]);

    if (num > max) max = num;
    if (num < min) min = num;
  }

  return max + ' ' + min;
}

function highAndLowV2(numbers) {
  const arrStr = numbers.split(' ');
  const arrInt = arrStr.map(Number);
  const arrSortInt = arrInt.sort((a, b) => a - b);
  return `${arrSortInt.at(-1)} ${arrSortInt.at(0)}`;
}

console.log(highAndLowV1('1 2 3 4 5'));
console.log(highAndLowV2('5 1 2 3 4 5'));
