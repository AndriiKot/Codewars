class Ghost {
  constructor() {
    this.colors = ["white", "yellow", "purple", "red"];
    this.color = this.getRandomColor();
  }

  getRandomNumber(min = 0, max = this.colors.length - 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomColor() {
    return this.colors[this.getRandomNumber()];
  }
}

console.log(new Ghost().colors);
console.log(new Ghost().color);
