=begin
 JS
 let str = "String 1"   // undefined
 str                    // "String 1
str.length             //  8
"Hello js!".length     //  9
str[0]                 // "S"
str[str.length - 1]    // "1"
str.slice(1)           // "tring 1"
str.slice(1,3)         // "tr"
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
=end
str = 'String 1'  # "String 1"
str.size          # 8
p "Hello Ruby!".size   # 11
str[0]                 # "S"
str[-1]                # "1"
str[1..-1]              # "tring 1"
str[1,3]              # "tri"

joe = 'joe'
p joe.capitalize
p joe
joe.capitalize!
p joe

cat = "CAT"
 cat.downcase
 p cat
 cat.downcase!
 p cat

 ibm = 'ibm'
 ibm.upcase
 p ibm
 ibm.upcase!
 p ibm

 oxi = "OXI"
 oxi.capitalize!
 p oxi

 text = "    hELo rUBY!    "
 text.strip!.capitalize!
 p text








                              




