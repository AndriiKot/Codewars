def bmi(weight, height)
  conditions = [
    ->(bmi) { bmi <= 18.5 ? 'Underweight' : nil },
    ->(bmi) { bmi <= 25 ? 'Normal' : nil },
    ->(bmi) { bmi <= 30 ? 'Overweight' : nil },
    ->(bmi) { 'Obese' },
  ]
  
  bmi_value = weight / (height ** 2)
  
  conditions.find { |condition| condition[bmi_value] }[bmi_value]
end
