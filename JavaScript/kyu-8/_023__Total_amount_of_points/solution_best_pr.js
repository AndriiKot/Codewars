const points1 = (g) => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);

const points2 = (a) =>
  a.reduce((r, e) => {
    const x = e[0];
    const y = e[2];
    return r + (x > y ? 3 : x < y ? 0 : 1);
  }, 0);
