def likes(names)
  len = names.size
  res = "#{names[0]}, #{names[1]} and #{len-2} others like this"
  if len == 0
    res = "no one likes this"
  elsif len == 1
    res = "#{names[0]} likes this"
  elsif len == 2
    res = "#{names[0]} and #{names[1]} like this"
  elsif len == 3
    res = "#{names[0]}, #{names[1]} and #{names[2]} like this"
  end
  res
end