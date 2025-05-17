get_number_from_str = proc { |str| str.gsub(/\D/, '').to_i }

def order(words, &index)
  arr_words = []
  words.split.each { |word|
    arr_words[index[word] - 1] = word
  } 
  arr_words.join(' ') 
end



p (order('is2 Thi1s T4est 3a', &get_number_from_str ));
p order('4of Fo1r pe6ople g3ood th5e the2', &get_number_from_str)
p (order('', &get_number_from_str ));

# or

def order(words, &index)
  def get_number_from_str(str) = str.gsub(/\D/, '').to_i
  arr_words = []
  words.split.each { |word|
    arr_words[get_number_from_str(word) - 1] = word
  } 
  arr_words.join(' ') 
end
