// Best Practice
{
  function aliasGen(first, last) {
    let auxFirst = first[0].toUpperCase();
    let auxLast = last[0].toUpperCase();

    if (firstName[auxFirst] && surname[auxLast]) {
      return firstName[auxFirst] + " " + surname[auxLast];
    } else {
      return "Your name must start with a letter from A - Z.";
    }
  }
}

// My Solution
{
  function aliasGen(name, lastName) {
    let result = "Your name must start with a letter from A - Z.";

    const firstChrName = name.charAt(0);
    const firstChrSurname = lastName.charAt(0);

    const normalizedFistName = firstChrName.toUpperCase();
    const normalizedSurname = firstChrSurname.toUpperCase();

    const regular = /[A-Z]/;

    if (regular.test(normalizedFistName) && regular.test(normalizedSurname)) {
      result = `${firstName[normalizedFistName]} ${surname[normalizedSurname]}`;
    }
    return result;
  }
}
