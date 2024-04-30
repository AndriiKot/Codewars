class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (!this.lives) throw Error;
    this.lives--;
    return n === this.number;
  }
}
