function validateUsr(username) {
  const res = /^[a-z\d_]{4,16}$/.test(username);
  return res;
}

console.log(1, validateUsr("asddsa"), true);
console.log(2, validateUsr("a"), false);
console.log(3, validateUsr("Hass"), false);
console.log(4, validateUsr("Hasd_12assssssasasasasasaasasasasas"), false);
console.log(5, validateUsr(""), false);
console.log(6, validateUsr("____"), true);
console.log(7, validateUsr("012"), false);
console.log(8, validateUsr("0123"), true);
console.log(9, validateUsr("1234567890abcdefg"), false);
console.log(10, validateUsr("p1pp1"), true);
console.log(11, validateUsr("asd43 34"), false);
console.log(12, validateUsr("asd43_34"), true);
console.log(13, validateUsr("abcd"), true);

console.log(14, validateUsr("a".repeat(16)), true);
console.log(15, validateUsr("a".repeat(4)), true);
