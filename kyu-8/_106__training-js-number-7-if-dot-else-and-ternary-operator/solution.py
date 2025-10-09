PRICES = {
  10: 90,
  5: 95,
  0: 100
}

def sale_hotdogs(n):
    for quantity, price in PRICES.items():
        if n >= quantity:
            return n * price