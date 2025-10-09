function whoIsPaying1(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}

// My solution
function whoIsPaying2(name) {
  let arr;
  if (name.length > 2) {
    arr = [name, name.slice(0, 2)];
  } else {
    arr = [name];
  }
  return arr;
}
