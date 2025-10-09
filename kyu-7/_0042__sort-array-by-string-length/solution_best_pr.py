def sort_by_length(arr):
    return sorted(arr, key=len)

# or

def sort_by_length(arr):
  arr.sort(key = len) 
  return arr