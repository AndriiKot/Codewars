var countSheep = function (num) {
  let string = '';
  let count = 1;
  while (count <= num) {
    string += `${count} sheep...`;
    count++;
  }
  return string;
};
