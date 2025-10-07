def chromosome_check(sperm)
  sex = sperm.include?('Y') ? 'son' : 'daughter'
  "Congratulations! You're going to have a #{sex}."
end