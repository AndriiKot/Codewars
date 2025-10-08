function breakChocolate(n, m) {
  return n > 0 && m > 0 ? n * m - 1 : 0;
}

{
  const breakChocolate = (n, m) => {
    return Math.max(0, m * n - 1);
  };
}

{
  const breakChocolate = (n, m) => {
    return n * m === 0 ? 0 : n * m - 1;
  };
}
