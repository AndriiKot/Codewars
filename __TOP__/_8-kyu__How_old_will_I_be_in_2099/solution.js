function calculateAge(birth, year) {
  let res;

  const diffYears = year - birth;
  const years = Math.abs(diffYears);
  const spellingYear = years == 1 ? 'year' : 'years';

  if (diffYears > 0) {
    res = `You are ${years} ${spellingYear} old.`;
  } else if (diffYears < 0) {
    res = `You will be born in ${years} ${spellingYear}.`;
  } else {
    res = 'You were born this very year!';
  }
  return res;
}

console.log(calculateAge(1990, 2099));
console.log(calculateAge(1990, 1990));
console.log(calculateAge(1990, 1991));
console.log(calculateAge(1992, 1990));
