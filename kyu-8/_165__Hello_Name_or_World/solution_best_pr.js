const hello1 = (s) => `Hello, ${s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : 'World'}!`;

function hello2(name) {
  name = name || 'World';
  name = name == 'World' ? name : name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${name}!`;
}
