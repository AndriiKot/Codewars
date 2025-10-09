def order(words)
  words.split.sort_by{ |w| w[/\d/] }.join(' ')
end

# or 

def order(words)
  words.split.sort_by { |w| w.chars.min } .join(" ")
end