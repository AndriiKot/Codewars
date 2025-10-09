IDEAS_RATING = {
    3 => 'I smell a series!',
    1 => 'Publish!',
    0 => 'Fail!',
}.freeze

def well(x)
  good_ideas_count = x.count('good')    
  IDEAS_RATING.each do |key, value| 
    return value if key <= good_ideas_count 
  end
end


p (well(['bad', 'bad', 'bad']))
p (well(['good', 'bad', 'bad', 'bad', 'bad']))
p (well(['bad', 'good', 'good', 'good', 'bad']))
                           