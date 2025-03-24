minimum,maximum = min,max

!!! 

The kata asks for you to create functions 
that find min and max values of a list. 
These functions are builtin to python and have 
the names min and max. I.e. 
if you just do min([1, 2, 3]) python will output 1.

This kata asks for you to make functions 
with the names minimum and maximum. 
We just need to chnage the name and 
then we can use the builtin min and max.

The code is equivalent to

minimum = min
maximum = max
In the same way that we can type
                                             
a = 2
we are just making an object called "minimum" 
that is an alias of "min". So whenever you do

minimum([1, 2, 3])
python will think you are telling it

min([1, 2, 3])
which is an inbuilt function 
and is exactly what the kata asks for.
