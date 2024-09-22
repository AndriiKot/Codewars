function spEng(sentence) {
  return /English/gi.test(sentence);
}

console.log(spEng("Hello, World!"));
console.log(spEng("The quick brown EngliSHfox jumps over the lazy dog."));
