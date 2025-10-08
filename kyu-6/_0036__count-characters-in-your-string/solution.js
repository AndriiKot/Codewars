function count(s) {
  return [...s].reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {});
}
