function enough(cap, on, wait) {
  const total = on + wait;
  return total > cap ? total - cap : 0;
}
