function shortcut(string) {
  return string.replace(/[aeiou]/g, '');
}

console.log(shortcut('hello')); // hll
console.log(shortcut('codewars')); // cdwrs
console.log(shortcut('goodbye')); // gdby
