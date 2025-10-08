const hotpo = (n) => {
  let step = 0;

  while (n > 1) {
    if (n & 1) n = 3 * n + 1;
    else n = n / 2;

    step++;
  }

  return step;
};
