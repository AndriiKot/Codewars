function toFreud(string) {
  let result = '';
  if (string) {
    result = string.split(' ');
    result.map((_w, i, arr) => (arr[i] = 'sex'));
    result = result.join(' ');
  }
  return result;
}
