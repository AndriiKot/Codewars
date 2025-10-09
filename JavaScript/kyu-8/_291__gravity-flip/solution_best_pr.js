// Best Praxe

{
  const flip = (d, a) => a.sort((x, y) => (d === 'R' ? x - y : y - x));
}

// My Solution
{
  const flip = (d, a) => {
    const result = a.sort((a, b) => a - b);
    if (d === 'L') result.reverse();

    return result;
  };

  console.log(flip('R', [3, 2, 1, 2]));
  console.log(flip('L', [1, 4, 5, 3, 5]));
  console.log(flip('R', [13, 2, 4, 7, 93]));
}
