var isAnagram = function (test, original) {
  var normalize = (str) => {
    return str.toLowerCase().split('').sort().join('');
  };
  return normalize(test) === normalize(original);
};
