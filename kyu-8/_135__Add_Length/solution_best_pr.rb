define_method(:add_length) {|str| str.split(" ").map {|i| "#{i} #{i.size}"}}

# or

def add_length(str)
  str.split.map!{|word| "#{word} #{word.size}"}
end