function solution(s) {
  return (s + '_').match(/.{2}/g) || [];
}

// or

{
  const solution = (str) => (str + '_').match(/../g) || [];
}
