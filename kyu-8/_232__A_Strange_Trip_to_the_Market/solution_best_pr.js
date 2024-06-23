function isLockNessMonster1(s) {
  return s.includes("tree fiddy") || s.includes("3.50");
}

// Other Solutions
const isLockNessMonster2 = (s) => /tree fiddy|three fifty|3.50/.test(s);


