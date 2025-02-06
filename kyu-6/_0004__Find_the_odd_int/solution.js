const findOdd = (A) => {
  let res = 0;
  const count = {};
  A.forEach((el, i, arr) => (count[el] ? (count[el] += 1) : (count[el] = 1)));
  for (const k in count) {
    if (count[k] & 1) {
      res = +k;
      break;
    }
  }
  return res;
};

console.log(findOdd([0, 1, 0, 1, 0]));
