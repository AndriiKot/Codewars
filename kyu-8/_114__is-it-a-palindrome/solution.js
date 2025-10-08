function isPalindrome(x) {
  const str = `${x}`.toLocaleLowerCase();
  const strReverse = str.split('').reverse().join('');
  return str == strReverse;
}

console.log(isPalindrome(123322));
