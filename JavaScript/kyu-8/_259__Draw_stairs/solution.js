function drawStairs(n) {
  let stairs = '';
  for (let i = 0; i < n; i++) {
    stairs += ' '.repeat(i) + 'I' + '\n';
  }
  return stairs.trim();
}

drawStairs(5);
