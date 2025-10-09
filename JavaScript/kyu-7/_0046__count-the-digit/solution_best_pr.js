const nbDig = (n, d) => {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    const strSquer = (i * i).toString();
    const strD = d.toString();
    if (strSquer.includes(strD)) {
      count += strSquer.split('').filter((str) => str === strD).length;
    }
  }
  return count;
};
