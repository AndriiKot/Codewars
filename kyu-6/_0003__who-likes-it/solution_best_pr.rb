def likes1(names)
  texts = [
    "no one likes this",
    "%s likes this",
    "%s and %s like this",
    "%s, %s and %s like this",
    "%s, %s and %s others like this"
  ]
  text =  texts[[names.size, 4].min]
  (text == texts.last) ? text % [names[0,2], names.size - 2].flatten : text % names
end

def likes2(names)
  case names
  in []
    "no one likes this"
  in [x]
    "#{x} likes this"
  in [x, y]
    "#{x} and #{y} like this"
  in [x, y, z]
    "#{x}, #{y} and #{z} like this"
  in [x, y, *rest]
   "#{x}, #{y} and #{rest.size} others like this" 
  else
    "error"
  end
end