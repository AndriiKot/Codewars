Array.prototype.filter = function (callback) {
  const result = [];

  this.forEach((element, index, array) => {
    if (callback(element, index, array)) {
      result.push(element);
    }
  });

  return result;
};
