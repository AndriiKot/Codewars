//return price without vat
function excludingVatPrice(price) {
  let result = 0;
  if (price > 0) {
    const vat = (price / 115) * 15;
    result = price - vat;
    result = Number.parseFloat(result.toFixed(2));
  }
  if (price === null) result = -1;
  return result;
}

// Testing
console.log(excludingVatPrice(230));
console.log(excludingVatPrice(123));
