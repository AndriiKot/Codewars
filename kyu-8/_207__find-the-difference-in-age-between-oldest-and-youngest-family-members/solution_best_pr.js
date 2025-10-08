function differenceInAges(ages) {
  const minAge = Math.min(...ages);
  const maxAge = Math.max(...ages);
  return [minAge, maxAge, maxAge - minAge];
}
