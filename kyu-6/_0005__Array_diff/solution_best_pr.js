const arrayDiff = (a, b) => {
  const setB = new Set(b);
  return a.filter((n) => !setB.has(n));
};
