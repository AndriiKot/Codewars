function periodIsLate(last, today, cycleLength) {
  let result = false;
  if ((today.getTime() - last.getTime()) / (1000 * 3600 * 24) > cycleLength) {
    result = true;
  }
  return result;
}
