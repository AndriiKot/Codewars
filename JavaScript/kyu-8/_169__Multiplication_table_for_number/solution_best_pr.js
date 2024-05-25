const multiTable1 = (n) =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((i) => `${i} * ${n} = ${i * n}`)
    .join("\n");

function multiTable2(number) {
  return `1 * ${number} = ${1 * number}
    2 * ${number} = ${2 * number}
    3 * ${number} = ${3 * number}
    4 * ${number} = ${4 * number}
    5 * ${number} = ${5 * number}
    6 * ${number} = ${6 * number}
    7 * ${number} = ${7 * number}
    8 * ${number} = ${8 * number}
    9 * ${number} = ${9 * number}
    10 * ${number} = ${10 * number}`;
}



