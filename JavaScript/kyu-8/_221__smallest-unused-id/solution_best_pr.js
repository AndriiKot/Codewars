function nextId1(ids) {
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}

function nextId2(ids) {
  const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i;
  }
}

function nextId3(ids) {
  for (i = 0; i < ids.length; i++) {
    if (ids.indexOf(i) == -1) {
      return i;
    }
  }
  return ids.length;
}
