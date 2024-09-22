function spEng1(s) {
  return /english/i.test(s);
}

// My solution:
function spEng2(sentence) {
  return /English/gi.test(sentence);
}
