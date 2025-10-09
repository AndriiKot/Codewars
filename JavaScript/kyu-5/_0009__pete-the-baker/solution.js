const cakes = (recipe, available) => {
  let res = [];

  for (const ingr in recipe) {
    const int = available[ingr];
    const value = isNaN(int) ? 0 : int;

    const maxCakes = Math.floor(value / recipe[ingr]);

    res.push(maxCakes);
    if (maxCakes < 1) break;
  }

  return Math.min(...res);
};

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 })); // Вывод: 6
