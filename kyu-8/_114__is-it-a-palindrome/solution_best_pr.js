function isPalindrome(x) {
  const str = `${x}`.toLocaleLowerCase();
  const strReverse = str.split('').reverse().join('');
  return str == strReverse;
}

function isPalindrome2(x) {
  x = x.toLowerCase();
  let a = 0;
  let b = x.length;
  while (a < b) {
    if (x[a] != x[b - 1]) return false;
    a++;
    b--;
  }
  return true;
}
