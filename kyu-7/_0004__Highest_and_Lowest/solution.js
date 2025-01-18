function highAndLow(numbers){
  const arrNumbers = numbers.split(' ').map(Number);
  return `${Math.max(...arrNumbers)} ${Math.min(...arrNumbers)}`
}

console.log(highAndLow("1 2 3 4 5"))
