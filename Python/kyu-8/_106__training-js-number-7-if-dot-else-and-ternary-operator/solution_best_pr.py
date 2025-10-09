def sale_hotdogs(n):
    prices = {
        n < 5 : 100, 
        5 <= n < 10 : 95, 
        n >= 10 : 90, 
    }
    return prices.get(True)*n