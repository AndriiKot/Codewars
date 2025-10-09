def disemvowel_v1(str)
  str.delete('aeiouAEIOU')
end

def disemvowel_v2(str)
  str.gsub(/[aouie]/i, '')
end
