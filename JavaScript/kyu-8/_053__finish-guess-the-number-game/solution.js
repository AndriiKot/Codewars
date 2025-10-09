class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    const answer = n == this.number;
    if (this.lives == 0) {
      throw new Error(' error already dead');
    }
    if (!answer) this.lives -= 1;
    return answer;
  }
}
