function isOpposite(s1, s2) {
  let result = false;
  if (!(s1 == "" || s2 == "")) {
    if (s1.toLowerCase() === s2.toLowerCase()) {
      result = true;
      for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) {
          result = false;
          break;
        }
      }
    }
  }
  return result;
}

