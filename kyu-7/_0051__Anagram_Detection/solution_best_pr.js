String.prototype.sortLetters = function () {
  return this.toLowerCase().split('').sort().join('');
};

var isAnagram = function (test, original) {
  return test.sortLetters() == original.sortLetters();
};
