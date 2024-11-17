function stringy(size) {
  let str = '';
  for (let i = 0; i < size; i++) {
    str += i & 1 ? '0' : '1';
  }

  return str;
}

console.log(stringy(6));
