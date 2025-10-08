function findNb(m) {
  let n = 0;
  while (m > 0) {
    n++;
    m -= n ** 3;
  }
  return m === 0 ? n : -1;
}
