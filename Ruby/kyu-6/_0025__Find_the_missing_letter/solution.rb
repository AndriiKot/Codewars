def find_missing_letter(arr)
  ((arr[0]..arr[-1]).to_a - arr)[0]
end