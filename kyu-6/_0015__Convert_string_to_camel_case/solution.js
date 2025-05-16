function toCamelCase(str) {
  return str
    .split(/-|_/)
    .map((word, i) => {
      return i === 0 ? word : `${word[0].toUpperCase()}${word.slice(1)}`;
    })
    .join('');
}

console.log(toCamelCase('the_stealth_warrior')); // theStealthWarrior
