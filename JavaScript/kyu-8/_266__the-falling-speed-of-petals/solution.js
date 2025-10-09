function sakuraFall(v) {
  let result = 0;
  const h = 80 * 5;
  if (typeof v === 'number') {
    if (v > 0) result = h / v;
  }
  return result;
}
