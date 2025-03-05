def fake_bin(s)
  s.gsub(/./) { |match| match >= '5' ? '1' : '0' }
end

p fake_bin('555')