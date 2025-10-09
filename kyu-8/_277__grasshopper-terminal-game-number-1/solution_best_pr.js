class Hero {
  constructor(name = `Hero`) {
    this.name = name;
    this.position = `00`;
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}

// My solution:
// function Hero(name) {
//   return {
//     name: name || "Hero",
//     position: "00",
//     health: 100,
//     damage: 5,
//     experience: 0,
//   };
// }
