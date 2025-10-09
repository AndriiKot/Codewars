// Codewars solution
class Circular {
  constructor() {
    this.value = 'Hello World';
    this.self = this;
  }
}

circular = new Circular();
// My solution
const circular = {
  value: 'Hello World',
};

circular.self = circular;
