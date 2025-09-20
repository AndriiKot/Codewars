drink_rules = [
    (lambda age: age >= 21, 'whisky'),
    (lambda age: age >= 18, 'beer'),
    (lambda age: age >= 14, 'coke'),
    (lambda age: True, 'toddy')
]
def people_with_age_drink(age):
    for check, drink in drink_rules:
        if check(age):
            return f"drink {drink}"

# or

def people_with_age_drink(age):
    for a in [[21,'whisky'],[18,'beer'],[14,'coke'],[0,'toddy']]:
        if age >= a[0]:
            return "drink {0}".format(a[1])