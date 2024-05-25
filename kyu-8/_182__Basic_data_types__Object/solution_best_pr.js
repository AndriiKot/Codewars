const animals = {
  name: "dog",
  legs: 4,
  color: "white",
};

function animal({ color, name, legs }) {
  return `This ${color} ${name} has ${legs} legs.`;
}

console.log(animal(animals));
