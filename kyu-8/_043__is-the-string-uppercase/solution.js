String.prototype.isUpperCase = function () {
  const str = this.toString();
  return str == this.toUpperCase() || str == '';
};

// TEST CASES
const str1 = 'HELLO I  AM DONALD';
const str2 = 'hello i am donald';
const str3 = 'ACSKLDFJSgSKLDFJSKLDFJ';
const str4 = 'ACSKLDFJSGSKLDFJSKLDFJ';

console.log(str1.isUpperCase());
console.log(str2.isUpperCase());
console.log(str3.isUpperCase());
console.log(str4.isUpperCase());
