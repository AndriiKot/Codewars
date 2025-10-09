function reverse1(string) {
  return string.split(' ').reduce((acc, curr) => curr + ' ' + acc);
}

function reverse2(string) {
  return string.split(' ').reverse().join(' ');
}
