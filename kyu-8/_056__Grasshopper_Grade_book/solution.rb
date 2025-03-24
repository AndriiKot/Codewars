GRADE_BOOK = {
  ->(avg) { avg.between?(90,100) } => "A",
  ->(avg) { avg.between?(80,90) } => "B",
  ->(avg) { avg.between?(70,80) } => "C",
  ->(avg) { avg.between?(60,70) } => "D",
  ->(avg) { true } => "F",
}

def get_grade(s1, s2, s3)
  average = (s1 + s2 + s3) / 3
  GRADE_BOOK.each { |key, value| return value if key[average] }
end


p get_grade(1, 1, 1)