def high(x)
  x.split.max_by { |w| score_word(w) }
end

def score_word(word)
  word.chars.inject(0) { |sum, ch| sum + (ch.ord - 96) }
end