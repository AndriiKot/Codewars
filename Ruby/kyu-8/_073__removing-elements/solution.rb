def remove_every_other(arr)
  arr.delete_if.with_index {|el, i| i & 1 != 0 }
end