function getDrinkByProfession(param) {
  getDrink = {
    jabroni: 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    programmer: 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    politician: 'Your tax dollars',
    rapper: 'Cristal',
  };
  return getDrink[param.toLowerCase()] || 'Beer';
}

console.log(getDrinkByProfession('jabrOni'));
