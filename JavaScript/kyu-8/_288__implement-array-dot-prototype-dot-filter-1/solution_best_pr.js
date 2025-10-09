// Best Praxe
Array.prototype.filter1 = function (fn) {
  return this.reduce((s, a) => (fn(a) ? (s.push(a), s) : s), []);
};

// My Solution
Array.prototype.filter2 = function (callback) {
  const result = [];

  this.forEach((element, index, array) => {
    if (callback(element, index, array)) {
      result.push(element);
    }
  });

  return result;
};
