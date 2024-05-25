function findNeedle(haystack) {
  const len = haystack.length;
  for (let i = 0; i < len; i++) {
    if (haystack[i] == "needle") {
      return "found the needle at position " + i;
    }
  }
}
