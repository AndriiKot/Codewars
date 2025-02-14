let s1 = 'abcdefghijklmnopqrstuvwxyz'.repeat(10_000);
let s2 = 'zyxcba'.repeat(9_000);

function scramble(str1, str2) {
  const letters = new Set(str2.split(''));
  let res = true;
  letters.forEach((c) => {
    if (str1.split(c).length - 1 < str2.split(c).length - 1) {
      res = false;
      return;
    }
  });
  return res;
}

console.log(scramble('rkqodlw', 'xworld'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak'));
console.log(scramble(s1, s2));
