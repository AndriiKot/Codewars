def count_smileys(arr)
  arr.count { |smile| smile =~ /\A[:;][~-]?[D)]\z/ }
end