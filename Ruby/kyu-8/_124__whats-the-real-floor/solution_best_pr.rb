FLOOR_RULES = {
  (14..) => 2,   
  (1..13)  => 1,   
  (..0)  => 0,
}

def get_real_floor(american_floor)
  FLOOR_RULES.each do |range, offset|
    if range.include?(american_floor)
      return american_floor - offset
    end
  end
end