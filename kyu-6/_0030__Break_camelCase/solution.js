function solution(str) {
  return str.replace(/[A-Z]/g, (match) => ` ${match}`);
}
