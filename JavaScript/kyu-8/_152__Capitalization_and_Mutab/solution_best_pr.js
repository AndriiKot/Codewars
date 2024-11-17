const capitalizeWord1 = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}
