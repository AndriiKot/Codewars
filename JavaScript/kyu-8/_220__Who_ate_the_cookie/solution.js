function cookie(x) {
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
