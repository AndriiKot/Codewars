const countSheep1 = (num) => {
  let val = '';
  for (let i = 1; i <= num; i++) {
    val += `${i} sheep...`;
  }
  return val;
};

var countSheep2 = function (num) {
  let string = '';
  let count = 1;
  while (count <= num) {
    string += `${count} sheep...`;
    count++;
  }
  return string;
};
