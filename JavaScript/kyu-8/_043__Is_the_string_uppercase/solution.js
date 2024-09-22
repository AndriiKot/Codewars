String.prototype.isUpperCase = function () {
  const str = this.toString();
  return str == this.toUpperCase() || str == "";
};


// TEST CASES
let str1 = "HELLO I  AM DONALD";
let str2 = "hello i am donald";
let str3 = "ACSKLDFJSgSKLDFJSKLDFJ";
let str4 = "ACSKLDFJSGSKLDFJSKLDFJ";

console.log(str1.isUpperCase());
console.log(str2.isUpperCase());
console.log(str3.isUpperCase());
console.log(str4.isUpperCase());
