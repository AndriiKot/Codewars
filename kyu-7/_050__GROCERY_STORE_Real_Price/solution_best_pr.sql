SELECT 
    name, 
    weight, 
    price, 
    ROUND((price/weight*1000)::numeric, 2)::float AS price_per_kg
FROM 
    Products
ORDER BY 
    price_per_kg, name;
