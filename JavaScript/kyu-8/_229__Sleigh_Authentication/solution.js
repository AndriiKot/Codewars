function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return /Santa Claus/i.test(name) && /Ho Ho Ho!/i.test(password);
};

let sleigh = new Sleigh();
console.log(sleigh.authenticate("Santa Claus", "Ho Ho Ho!")); // true


