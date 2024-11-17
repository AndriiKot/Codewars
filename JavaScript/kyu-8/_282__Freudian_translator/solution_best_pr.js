// Best Praxes
var toFreud1 = (s) => s.replace(/[^ ]+/g, 'sex');

// My Solution
function toFreud2(string) {
  let result = '';
  if (string) {
    result = string.split(' ');
    result.map((_w, i, arr) => (arr[i] = 'sex'));
    result = result.join(' ');
  }
  return result;
}
