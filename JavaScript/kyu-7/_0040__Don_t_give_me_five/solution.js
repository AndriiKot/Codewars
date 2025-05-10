const dontGiveMeFive = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    if (!`${i}`.includes('5')) {
      arr.push(i);
    }
  }
  return arr.length;
};

dontGiveMeFive(1, 17);
