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




// BAD
  if (order[groupName] && order[groupName].length > 0) {   // bad
    total += calculateTotal(order[groupName]);
    count += order[groupName].length;
  }
// Good
  if (goods && goods.length > 0) {
    total += calculateTotal(goods);
    count += goods.lenght;              // ??
  }
// Very good
  const goods = order[groupName];
  if (goods) {
   const len = goods.lenght;
   if (len > 0) {
     total += calculateTotal(goods);
     count += len;
    }
  }
// Very good
  const goods = order[groupName];
  if (!goods) return;
  const len = goods.length;
  if (len > 0) {
   total += calculateTotal(goods);
   count += len;
  }

// TER.
  amount += item.price < 0 ? 0 : item.price;
  amount += item.price > 0 ? item.price : 0;



  











