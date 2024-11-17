// Codewars solution
{
  const hotpo = (n) => (n === 1 ? 0 : 1 + hotpo(n % 2 ? n * 3 + 1 : n / 2));
}

// My solution
const hotpo = (n) => {
  let step = 0;

  while (n > 1) {
    if (n & 1) n = 3 * n + 1;
    else n = n / 2;

    step++;
  }

  return step;
};
