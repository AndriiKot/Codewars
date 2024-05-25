const findNeedle = (haystack) => {
  return `found the needle at position ${haystack.indexOf("needle")}`;
};

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));