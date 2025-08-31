RULES = {
  ->(exam, projects) { exam > 90 || projects > 10 } => 100,
  ->(exam, projects) { exam > 75 && projects > 4 }  => 90,
  ->(exam, projects) { exam > 50 && projects > 1 }  => 75,
}

def final_grade(exam, projects)
  RULES.each { |key, value| return value if key[exam, projects] }.default = 0
end