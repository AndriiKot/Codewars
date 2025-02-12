def increment_string(input)
  def next_number(str) str.next end
  def str_end(str) str.gsub(/[^\d]/, '' ) end
  def str_start(str) str.gsub(/[\d]/, '') end
  res = (input[-1]&.match? /\d/) ? str_start(input) + next_number(str_end(input)) : "#{input}1"
end

p increment_string('foobar99');