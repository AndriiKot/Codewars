def grow(x) 
  x.inject(1) { |res, el| res * el }
end