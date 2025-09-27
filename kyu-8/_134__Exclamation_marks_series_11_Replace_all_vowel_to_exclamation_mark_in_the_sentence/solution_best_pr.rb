def replace(s)
  s.gsub(/[aeiou]/i, '!')
end

# or

def replace(s)
    s.tr("aeiouAEIOU'","!")
end