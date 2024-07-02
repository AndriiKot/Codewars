SELECT 
    pokemon_name, 
    str * multiplier AS modifiedStrength,
    element
FROM pokemon
    INNER JOIN multipliers
        ON pokemon.element_id = multipliers.id
WHERE str * multiplier >= 40
ORDER BY modifiedStrength DESC;