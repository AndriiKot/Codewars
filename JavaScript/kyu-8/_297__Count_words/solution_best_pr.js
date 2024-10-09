// Best Praxe
{
  function countWords(str) {
    return (str.match(/[^\s]+/g) || []).length;
  }
}

{
  const countWords = (str) => str.split(/\s+/).filter((x) => x).length;
}
// My solution

function countWords(str) {
  str = str.trim();
  const arrWords = str.split(/\s+/);
  const filteredWords = arrWords.filter(Boolean);
  return filteredWords.length;
}
