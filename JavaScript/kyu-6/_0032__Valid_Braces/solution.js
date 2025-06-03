function validBraces(s) {
  const stack = [];
  const couples = { '(': ')', '[': ']', '{': '}' };
  const startItem = '([{';
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (startItem.includes(item)) {
      stack.push(item);
    } else {
      if (stack.length === 0 || couples[stack.pop()] !== item) return false;
    }
  }
  return stack.length === 0;
}
