const drinks = {
  jabroni: 'Patron Tequila',
  'school counselor': 'Anything with Alcohol',
  programmer: 'Hipster Craft Beer',
  'bike gang member': 'Moonshine',
  politician: 'Your tax dollars',
  rapper: 'Cristal',
};

const getDrinkByProfession1 = (profession) => drinks[profession.toLowerCase()] || 'Beer';

// My solution:
function getDrinkByProfession2(param) {
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
