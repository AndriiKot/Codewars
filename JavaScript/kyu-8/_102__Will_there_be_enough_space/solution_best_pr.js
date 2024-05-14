function enough1(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

function enough2(cap, on, wait) {
  const total = on + wait;
  return total > cap ? total - cap : 0;
}
