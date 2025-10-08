function Sleigh1() {
  this.name = 'Santa Claus';
  this.password = 'Ho Ho Ho!';
}

Sleigh1.prototype.authenticate = function (name, password) {
  return this.name == name && this.password == password;
};

// My solution
function Sleigh2() {}

Sleigh2.prototype.authenticate = function (name, password) {
  return /Santa Claus/i.test(name) && /Ho Ho Ho!/i.test(password);
};
