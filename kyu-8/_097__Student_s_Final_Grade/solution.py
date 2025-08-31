RULES = [
    (lambda exam, projects: exam > 90 or projects > 10, 100),
    (lambda exam, projects: exam > 75 and projects > 4, 90),
    (lambda exam, projects: exam > 50 and projects > 1, 75),
]

def final_grade(exam, projects):
    for condition, grade in RULES:
        if condition(exam, projects):
            return grade
    return 0