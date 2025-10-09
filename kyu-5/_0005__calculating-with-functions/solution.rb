def num(v, *a) = a.size == 1 ? v.send(a[0][0], a[0][1]) : v 

def zero(*a) = num(0, *a) 
def one(*a) = num(1, *a) 
def two(*a) = num(2, *a) 
def three(*a) = num(3, *a) 
def four(*a) = num(4, *a) 
def five(*a) = num(5, *a) 
def six(*a) = num(6, *a) 
def seven(*a) = num(7, *a) 
def eight(*a) = num(8, *a) 
def nine(*a) = num(9, *a) 


def divided_by(a) = [:/, a] 
def times(a) = [:*, a] 
def minus(a) = [:-, a] 
def plus(a) = [:+, a] 

p one(plus(one()))
p two(times(seven()))

