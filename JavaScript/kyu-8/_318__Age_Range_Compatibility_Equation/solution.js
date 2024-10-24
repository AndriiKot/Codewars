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
