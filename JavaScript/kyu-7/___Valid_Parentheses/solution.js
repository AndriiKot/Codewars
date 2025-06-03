function validParentheses(s) {
  let balance = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? balance++ : balance--;
    if (balance < 0) return false;
  }
  return balance === 0;
}
