def check_for_factor(base, factor)
  (base % factor).zero?
end

=begin
or

 def check_for_factor(base, factor) = base % factor == 0

=end