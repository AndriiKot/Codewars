function hello(name) {
  name = name || 'World';
  name = name == 'World' ? name : name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${name}!`;
}

console.log(hello(''));
console.log(hello('bob'));
