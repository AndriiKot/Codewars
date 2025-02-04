def cakes(recipe, available)
  recipe.collect { | k, v | available[k].to_i / v }.min
end

