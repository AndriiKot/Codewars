function isPangram(string) {
  const pagramSize = new Set(string.replace(/\W|\d/g, '').toLowerCase().split(''));
  return pagramSize.size === 26;
}
