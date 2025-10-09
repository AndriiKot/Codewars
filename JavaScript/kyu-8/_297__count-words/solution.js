function countWords(str) {
  str = str.trim();
  const arrWords = str.split(/\s+/);
  const filteredWords = arrWords.filter(Boolean);
  return filteredWords.length;
}

console.log(countWords('Hello'));
console.log(countWords('Hello, World!'));
