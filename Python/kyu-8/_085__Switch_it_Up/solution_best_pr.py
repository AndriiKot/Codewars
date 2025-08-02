def switch_it_up(n):
    return   ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

#or

def switch_it_up(number):
    dict = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    0: "Zero"}
    
    return dict.get(number)