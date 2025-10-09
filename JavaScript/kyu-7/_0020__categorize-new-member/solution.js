function openOrSenior(data) {
  return Array.from({ length: data.length }, (_e, i) => (data[i][0] >= 55 && data[i][1] > 7 ? 'Senior' : 'Open'));
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ]),
);
