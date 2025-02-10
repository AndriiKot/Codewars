def duplicate_encode(word, new_str='')
  word = word.downcase
  word.each_char { |c| new_str += word.count(c) == 1 && '(' || ')' }
  new_str
end

p duplicate_encode('wwwdfasf');
p duplicate_encode( "(( @");
p duplicate_encode("Success"); 