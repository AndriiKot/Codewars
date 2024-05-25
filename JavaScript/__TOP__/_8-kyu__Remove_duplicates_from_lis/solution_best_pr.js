const distinct1 = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

function distinct2(arr) {
  return [...new Set(arr)];
}


