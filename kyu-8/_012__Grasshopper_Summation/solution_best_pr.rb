def summation1(num) = (1..num).sum

def summation2(num)
    (1..num).reduce(:+)
end