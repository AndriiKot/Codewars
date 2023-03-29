const calculateSubtotal = (goods) => {
  let amount = 0;

// Variation 1
  for (const item of goods) {
   if(item.price < 0) throw 'Negative price';
     else amount += item.price;
   }
  return amount;
};

// Variation 2.0
  if (item.price < 0) throw 'Negative price';
     amount += item.price;

  if (item.price < 0) {
    throw 'Negative price';
  }
  amount += item.price;

// Variation 2.1
  if(item.price < 0) return;
    amount += item.price;

  if (item.price < 0) {
    return;
  }
  amount += item.price;

// BAD
   if (item.price > 0) return true;   // !!!  bad
     return false;                   //  !!!  bad

// Good
  return item.price > 0;









