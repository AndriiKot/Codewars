function stairsIn20(s) {
  let days = 0;
  s.forEach((s) => {
    days += s.reduce((a, b) => a + b, 0) * 20;
  });

  return days;
}
