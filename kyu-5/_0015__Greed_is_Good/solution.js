const score = (dice) => {
  const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  const BigWin = { 1: 1000, 2: 200, 3: 300, 4: 400, 5: 500, 6: 600 };
  const BonusWin = { 1: 100, 5: 50 };
  let res = 0;

  dice.forEach((n) => (count[n] += 1));

  for (const k in count) {
    if (count[k] >= 3) {
      count[k] = count[k] - 3;
      res += BigWin[k];
      break;
    }
  }
  for (const k in count) {
    if (BonusWin[k]) {
      res += BonusWin[k] * count[k];
    }
  }

  return res;
};

console.log(score([2, 3, 4, 6, 2]));
