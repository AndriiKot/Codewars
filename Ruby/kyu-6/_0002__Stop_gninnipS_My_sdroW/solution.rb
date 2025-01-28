def spin_words(string)
  string.split.each { |w| w.reverse! if w.size >= 5}.join(' ')
end

p spin_words('string string')