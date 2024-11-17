function whoIsPaying(name) {
  let arr;
  if (name.length > 2) {
    arr = [name, name.slice(0, 2)];
  } else {
    arr = [name];
  }
  return arr;
}

console.log(whoIsPaying('Jenny'));
console.log(whoIsPaying('Sam'));
console.log(whoIsPaying('Sa'));
console.log(whoIsPaying('S'));
console.log(whoIsPaying(''));
