function bestFriend1(txt, a, b) {
  for (let i = 0; i < txt.length; i++) {
    if (txt[i] === a && txt[i + 1] !== b) return false;
  }
  return true;
}


function bestFriend2(txt, a, b) {
  for (let i = 0; i < txt.length; i++) {
      if (txt[i] == a) {
          if (i + 1 == txt.length) {
              return false;
          } else if (txt[i + 1] != b) {
              return false;
          }
      }
  }
  return true;
}