// Best Practices
{
  function slope([x1, y1, x2, y2]) {
    let slope = (y2 - y1) / (x2 - x1);
    return Number.isFinite(slope) ? `${slope}` : "undefined";
  }
}

// My Solution
function slope(points) {
  let result;
  const y = points[3] - points[1];
  const x = points[2] - points[0];
  if (x === 0) {
    result = "undefined";
  } else {
    result = y / x;
  }
  return `${result}`;
}
