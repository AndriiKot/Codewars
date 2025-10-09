def bmi(weight, height):
    bmi = weight / height ** 2
    res = 'Obese'
    if bmi <= 30:
        res = 'Overweight'
        if bmi <= 25:
            res = 'Normal'
            if bmi <= 18.5:
                res = 'Underweight'
    return res


print(bmi(50, 1.8))