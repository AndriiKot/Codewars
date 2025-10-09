def get_average(marks)
  marks.sum / marks.size
end

=begin
or

def get_average(marks)
  marks.inject(:+) / marks.size
end

def get_average(marks)
  marks.reduce(&:+) / marks.size
end

=end