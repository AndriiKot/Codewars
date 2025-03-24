def get_grade1(*s):
    return 'FFFFFFDCBAA'[sum(s)//30]

def get_grade2(s1, s2, s3):
    return {6:'D', 7:'C', 8:'B', 9:'A', 10:'A'}.get((s1 + s2 + s3) / 30, 'F')
