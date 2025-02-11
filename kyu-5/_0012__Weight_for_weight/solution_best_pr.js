const orderWeight = (str) => {
  const sortWeight = (s) =>
    s
      .split('')
      .map((c) => +c)
      .reduce((acc, curr) => acc + curr, 0);
  return str
    .split(' ')
    .sort()
    .sort((a, b) => sortWeight(a) - sortWeight(b))
    .join(' ');
};
