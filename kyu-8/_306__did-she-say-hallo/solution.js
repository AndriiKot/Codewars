function validateHello(greetings) {
  const res = /\b(hello|ciao|salut|hallo|hola|ahoj|czesc)\b/i.test(greetings);
  return res;
}
