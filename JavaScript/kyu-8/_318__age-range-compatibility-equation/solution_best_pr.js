// Best prix
{
  function datingRange(age) {
    return `${min(age)}-${max(age)}`;

    function min(age) {
      return Math.floor(age > 14 ? age / 2 + 7 : age - 0.1 * age);
    }

    function max(age) {
      return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.1 * age);
    }
  }
}

// My solution
function datingRange(age) {
  let result;
  if (age <= 14) {
    const min = age - 0.1 * age;
    const max = age + 0.1 * age;
    result = `${Math.floor(min)}-${Math.floor(max)}`;
  } else {
    const min = Math.floor(age / 2) + 7;
    const max = (age - 7) * 2;
    result = `${min}-${max}`;
  }

  return result;
}
