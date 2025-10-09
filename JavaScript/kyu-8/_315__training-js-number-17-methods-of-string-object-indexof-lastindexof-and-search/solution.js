function firstToLast(str, c) {
  let result = -1;
  const firstChr = str.indexOf(c);
  const lastChr = str.lastIndexOf(c);
  if (firstChr !== -1) {
    result = lastChr - firstChr;
  }
  return result;
}
