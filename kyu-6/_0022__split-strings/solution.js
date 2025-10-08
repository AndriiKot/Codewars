function solution(str) {
  str = str.length & 1 ? str + '_' : str;
  let indexStr = -2;
  return Array.from({ length: str.length / 2 }, (el) => {
    indexStr += 2;
    return (el = `${str[indexStr]}${str[indexStr + 1]}`);
  });
}
