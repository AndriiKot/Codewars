GRADE_BOOK = {
 lambda balls : 90 <= balls <= 100 : "A",
 lambda balls : 80 <= balls <= 90 : "B",
 lambda balls : 70 <= balls <= 80 : "C",
 lambda balls : 60 <= balls <= 70 : "D",
 lambda balls : True: "F",
}

def get_grade(s1, s2, s3):
    average = (s1 + s2 + s3) / 3
    for condition, grade in GRADE_BOOK.items():
        if condition(average):
            return grade
    

print(get_grade(100, 100, 100))