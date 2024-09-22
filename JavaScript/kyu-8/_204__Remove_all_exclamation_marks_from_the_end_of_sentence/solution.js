function remove(string) {
  return string.replace(/!+$/g, "");
}

console.log(remove("!Hi!!"));
