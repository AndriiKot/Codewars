def to_camel_case(str)
  str.gsub(/[_-](.)/) {"#{$1.upcase}"}
end

# or

=begin
def to_camel_case(str)
  head, *tail = str.split(/[-_]/)
  head.to_s + tail.map(&:capitalize).join
end
=end