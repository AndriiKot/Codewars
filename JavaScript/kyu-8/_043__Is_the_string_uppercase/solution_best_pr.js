String.prototype.isUpperCase1 = function () {
  return this == this.toUpperCase();
};

String.prototype.isUpperCase2 = function () {
  return this.toUpperCase() === this.toString();
};
