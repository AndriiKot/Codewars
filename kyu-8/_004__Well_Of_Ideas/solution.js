function well(x) {
  let count = 0;
  x.forEach((element) => {
    element === 'good' ? count++ : count;
    if (count > 2) return;
  });
  if (count > 2) return 'I smell a series!';
  if (count === 0) return 'Fail!';
  return 'Publish!';
}
