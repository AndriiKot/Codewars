def bmi1(weight, height):
    _bmi = weight / height ** 2

    conditions = {
        18.5 : 'Underweight',
        25.0 : 'Normal',
        30.0 : 'Overweight',
        None : 'Obese'}
    for point in conditions:
        if point is None or _bmi <= point: return conditions[point]


def bmi2(weight, height):
    b = weight / height ** 2
    return ['Underweight', 'Normal', 'Overweight', 'Obese'][(b > 30) + (b > 25) + (b > 18.5)]