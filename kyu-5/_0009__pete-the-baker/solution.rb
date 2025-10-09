def cakes(r, a)
  r.each_with_object([]) {|(k, v), arr|  arr << a[k].to_i / v }.min
end


p cakes({"flour"=>500, "sugar"=>200, "eggs"=>1},{"flour"=>1200, "sugar"=>1200, "eggs"=>5, "milk"=>200})
