function nextId(ids) {
  for (let i = 0; i < ids.length; i++) {
    if (ids.indexOf(i) === -1) {
      return i;
    }
  }
  return ids.length;
}

console.log(nextId([1, 2, 3, 3, 3, 3, 4, 5]));

function nextId1(ids) {
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}
