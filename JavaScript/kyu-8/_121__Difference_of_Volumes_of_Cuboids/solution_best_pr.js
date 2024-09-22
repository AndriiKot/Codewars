function findDifference(a, b) {
  const aVol = a.reduce((a, b) => a * b, 1);
  const bVol = b.reduce((a, b) => a * b, 1);
  return Math.abs(aVol - bVol);
}
