function cookie1(x) {
  var t = typeof x;
  var who = t == 'string' ? 'Zach' : t == 'number' ? 'Monica' : 'the dog';
  return `Who ate the last cookie? It was ${who}!`;
}

// My solution
function cookie2(x) {
  let res = '';
  if (typeof x === 'number') {
    res = 'Monica';
  } else if (typeof x === 'string') {
    res = 'Zach';
  } else {
    res = 'the dog';
  }
  return `Who ate the last cookie? It was ${res}!`;
}
