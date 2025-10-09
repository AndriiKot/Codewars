// Codewars solution
{
  function splitAndMerge(string, separator) {
    return string
      .split(' ')
      .map((el) => el.split('').join(separator))
      .join(' ');
  }
}

// My solution
function splitAndMerge(string, separator) {
  const arrayWords = string.split(' ');
  let newString = '';
  arrayWords.forEach((element) => {
    console.log(element);
    newString += element.split('').join(separator) + ' ';
  });

  return newString.trim();
}
