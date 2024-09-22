function splitAndMerge(string, separator) {
  const arrayWords = string.split(" ");
  let newString = "";
  arrayWords.forEach((element) => {
    console.log(element);
    newString += element.split("").join(separator) + " ";
  });

  return newString.trim();
}

console.log(splitAndMerge("My name is John", "-"));
