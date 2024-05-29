function array(string) {
  return string.split(',').slice(1,-1).join(' ') || null
}

console.log(array("1,2,3,4,5"));
console.log(array("1"));
console.log(array(""));
