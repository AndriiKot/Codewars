// TODO: Refactor and shorten the function

const describeAge = (age) => `You're a(n) ${age > 64 ? 'elderly' : age > 17 ? 'adult' : age > 12 ? 'teenager' : 'kid'}`;

console.log(describeAge(1));
console.log(describeAge(13));
console.log(describeAge(17));
console.log(describeAge(64));
console.log(describeAge(65));
console.log(describeAge(100));
// TODO: Refactor and shorten the function
