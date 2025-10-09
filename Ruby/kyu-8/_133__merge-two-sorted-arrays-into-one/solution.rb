def merge_arrays(arr1, arr2)
  [*arr1, *arr2].uniq.sort!
end

# or

def merge_arrays(one, two)
  (one | two).sort
end

# or

def merge_arrays(arr1, arr2)
  arr1.union(arr2).sort
end