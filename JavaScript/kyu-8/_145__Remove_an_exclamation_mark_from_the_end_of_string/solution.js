function remove(string) {
  return string.at(-1) == "!" ? string.slice(0, -1) : string;
}

console.log(remove("Hi!"));
