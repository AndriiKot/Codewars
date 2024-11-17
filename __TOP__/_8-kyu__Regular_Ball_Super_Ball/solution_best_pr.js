var Ball1 = function (ballType) {
  this.ballType = ballType || 'regular';
};

class Ball2 {
  constructor(ballType = 'regular') {
    this.ballType = ballType;
  }
}

// My solution:
var Ball3 = function (ballType = 'regular') {
  return {
    ballType: ballType,
  };
};

console.log(new Ball1().ballType);
console.log(new Ball2('super').ballType);
console.log(new Ball3('super').ballType);
