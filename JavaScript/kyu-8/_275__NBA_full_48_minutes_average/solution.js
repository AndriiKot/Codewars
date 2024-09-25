function pointsPer48(ppg, mpg) {
  let result = 0;
  if (mpg) result = +((ppg / mpg) * 48).toFixed(1);

  return result;
}
