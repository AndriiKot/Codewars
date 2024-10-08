function correctPolishLetters(string) {
  const replacePolishLetters = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return string.replace(
    /[ąćęłńóśźż]/g,
    (letter) => replacePolishLetters[letter]
  );
}

console.log(correctPolishLetters("Jędrzej Błądziński")); // "Jedrzej Bladzinski"