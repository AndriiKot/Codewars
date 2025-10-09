const findUniq = (arr) => {
  setNums = new Set(arr);
  for (const num of setNums.values()) {
    const count = arr.reduce((acc, curr) => (curr === num ? acc + 1 : acc), 0);
    if (count === 1) return num;
  }
};
