def get_grade(s1, s2, s3)
  arr = { (90..100) => "A", (80..90) => "B", (70..80) => "C", (60..70) => "D", (0..60) => "F" }
  arr.each_key {|range| return arr[range] if range.include?( (s1 + s2 + s3) / 3)}
end