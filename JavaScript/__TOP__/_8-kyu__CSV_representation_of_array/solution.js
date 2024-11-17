function toCsvText(array) {
  let csv = '';
  array.forEach((element) => {
    csv += element.join(',') + '\n';
  });
  return csv.substring(0, csv.length - 1);
}

// Tests
toCsvText([
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
]);
