function flickSwitch(arr) {
  const newArr = Array.from({ length: arr.length }, () => true);
  let bolean = true;
  arr.forEach((element, i) => {
    bolean = element === 'flick' ? !bolean : bolean;
    newArr[i] = bolean;
  });
  return newArr;
}

const testArray = ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'];
console.log(flickSwitch(testArray));
