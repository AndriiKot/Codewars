def remove_every_other(arr)
  arr.select.with_index { |_,idx| idx.even? }
end

# or

def remove_every_other(arr)
  arr.delete_if.with_index {|el, i| i & 1 != 0 }
end