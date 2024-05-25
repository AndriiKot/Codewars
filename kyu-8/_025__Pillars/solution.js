function pillars(numPill, dist, width) {
  if (numPill < 2) return 0;
  const distance = dist * (numPill - 1) * 100 + width * numPill - width * 2;
  return distance;
}
