function dirReduc(arr) {
  const opposite = { NORTH: 'SOUTH', SOUTH: 'NORTH', EAST: 'WEST', WEST: 'EAST' };
  const stack = [];
  arr.forEach((el, i, arr) => {
    (stack.at(-1) === opposite[el] && stack.pop()) || stack.push(el);
  });
  return stack;
}
