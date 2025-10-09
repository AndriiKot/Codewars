function solution(number) {
  let result = 0;
  for (let i = 3; i < number; i++) {
    result += (i % 5 === 0 && i) || (i % 3 === 0 && i) || 0;
  }
  return result;
}

console.log(solution(10));
