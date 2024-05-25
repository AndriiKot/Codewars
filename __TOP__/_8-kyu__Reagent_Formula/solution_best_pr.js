function isValid(f) {
  return (
    !(f.includes(1) && f.includes(2)) &&
    !(f.includes(3) && f.includes(4)) &&
    f.includes(5) === f.includes(6) &&
    (f.includes(7) || f.includes(8))
  );
}

// sample tests
console.log(isValid([1, 3, 7]));          // true
console.log(isValid([1, 3, 5, 7]));       // false
console.log(isValid([1, 5, 6, 7, 3]));    // true
console.log(isValid([5, 6, 7]));          // true
console.log(isValid([5, 6, 7, 8]));       // true
console.log(isValid([6, 7, 8]));          // false
console.log(isValid([7, 8]));             // true 

