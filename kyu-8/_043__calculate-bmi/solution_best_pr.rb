def bmi(weight, height)
  conditions = [
    proc { |bmi| bmi <= 18.5 ? 'Underweight' : nil },
    proc { |bmi| bmi <= 25 ? 'Normal' : nil },
    proc { |bmi| bmi <= 30 ? 'Overweight' : nil },
    proc { 'Obese' },
  ]
  
  bmi = weight / (height ** 2)
  
  conditions.find { |condition| condition[bmi] }[bmi]
end