function quadrant1(x, y) {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  return 4;
}

function quadrant2(x, y) {
  return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
}

function quadrant3(x, y) {
  const plane = [
    [2, 1],
    [3, 4],
  ];
  const xAxis = x > 0 ? 1 : 0;
  const yAxis = y > 0 ? 0 : 1;

  return plane[yAxis][xAxis];
}
