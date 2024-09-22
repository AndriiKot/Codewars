function stairsIn20(a) {
  return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}

// My solution:
function stairsIn20_my(s) {
  let days = 0;
  s.forEach((s) => {
    days += s.reduce((a, b) => a + b, 0) * 20;
  });

  return days;
}
