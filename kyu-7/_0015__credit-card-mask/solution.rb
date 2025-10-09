def maskify(cc)
  cc.gsub(/.(?=.{4})/, '#')
end

p maskify('64607935616')