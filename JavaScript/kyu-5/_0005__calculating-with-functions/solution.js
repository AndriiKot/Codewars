const num = (v, ...a) => (a.length === 1 ? a[0](v) : v);

const zero = (...a) => num(0, ...a);
const one = (...a) => num(1, ...a);
const two = (...a) => num(2, ...a);
const three = (...a) => num(3, ...a);
const four = (...a) => num(4, ...a);
const five = (...a) => num(5, ...a);
const six = (...a) => num(6, ...a);
const seven = (...a) => num(7, ...a);
const eight = (...a) => num(8, ...a);
const nine = (...a) => num(9, ...a);

const dividedBy = (a) => (x) => Math.floor(x / a);
const times = (a) => (x) => x * a;
const minus = (a) => (x) => x - a;
const plus = (a) => (x) => x + a;

console.log(one(plus(one()))); // 2
console.log(two(times(seven()))); // 14
