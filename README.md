# Ruby-lesson-2-vs-Js
Ruby Lesson 2 vs Js
___
```ruby
#Ruby
str = 'String 1'        # "String 1"
str.size                # 8
"Hello Ruby!".size      # 11
str[0]                  # "S"
str[-1]                 # "1"
str[1..-1]              # "tring 1"
str[1,3]                # "tri"
```

```node
//Js
let str = "String 1"   // undefined
str                    // "String 1"
str.length             //  8
"Hello js!".length     //  9
str[0]                 // "S"
str[str.length - 1]    // "1"
str.slice(1)           // "tring 1"
str.slice(1,3)         // "tr"
```
____
____
```ruby
#Ruby
joe = 'joe'
p joe.capitalize        # "Joe"
p joe                   # "joe" !!!
joe.capitalize!         # "Joe"
p joe                   # "Joe" !!!

cat = "CAT"
cat.downcase            # "cat"
p cat                   # "CAT" !!!
cat.downcase!           # "cat"
p cat                   # "cat" !!!

ibm = 'ibm'            
ibm.upcase             # "IBM"
p ibm                  # "ibm" !!!
ibm.upcase!            # "IBM"
p ibm                  # "IBM"

oxi = "OXI"            
oxi.capitalize!
p oxi                  # "Oxi" !!!

text = "    hELo rUBY!    "
text.strip!.capitalize!
p text                   # "Hello ruby!"
```

____
```node
str.toLowerCase()      // "string 1"
console.log(str)       // "String 1" !!!
str.toUpperCase()      // "STRING 1"
console.log(str)       // "String 1" !!!


let text = "   hElLO jS!    "
text.length                                 // 16
text.trim()   
                                           // "hELLO jS!"
let str1 = text.toLowerCase().trim()      // "hello js!"
str1  = str1[0].toUpperCase() + str1.slice(1)

console.log(str1)                      // "Hello js!"
```



                              













                              





