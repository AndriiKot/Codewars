function getPlanetName(id) {
  const planets = {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus",
    8: "Neptune",
  };

  return planets[id];
}

console.log(getPlanetName(3));    // should return "Earth"
console.log(getPlanetName("3")); // should return "Earth"
