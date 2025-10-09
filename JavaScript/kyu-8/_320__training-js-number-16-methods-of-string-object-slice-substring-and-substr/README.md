# Training JS #16: Methods of String object--slice(), substring() and substr()

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/57274562c8dcebe77e001012](https://www.codewars.com/kata/57274562c8dcebe77e001012)

---

## 📝 Description

From this lesson, we begin to learn about String objects. 

First of all, we have a look at the attributes of String: `length`. Use `StringObject.length` to get the length of a string, like this:
```javascript
let str="dsfsdwesdfsadfwerfsdfsdfsdfsdfsdf";
console.log(str.length)  //output: 33
```
Secondly, a string can be like an array. each character in a string has an index. We can use the index to access this character. like this:
```javascript
let str="codewars";
for (let i=0;i<str.length;i++) console.log(str[i])
//output:
c
o
d
e
w
a
r
s
```

String Object has a lot of methods, many of these methods are used for web page text style and color modification. These methods are rarely used in programming and some of they are deprecated now. So we will omit the learning of these methods. These methods are:
```
anchor()    Create HTML anchor.
big()       Display a string in a large font.
blink()     Display flashing string.
bold()      Use bold display string.
fixed()     Using a typewriter text display string.
fontcolor() Displays a string using the specified color.
fontsize()  Displays a string using the specified size.
italics()   Use italics string.
link()      Display a string as a link.
small()     Use small size to display string.
strike()    Use the delete line to display the string.
sub()       Display the string as a subscript.
sup()       Display the string as a superscript.
```

This time we learn three methods that used to obtain the substring of the string:`slice()` `substring()` and `substr()`. Their usage:

```javascript
StringObject.slice(startindex,endindex)
StringObject.substring(startindex,endindex)
StringObject.substr(startindex,length)
```
Here we use some examples to illustrate their usage and difference:
```javascript
let str="Hello World!";
console.log(str.slice(6))
console.log(str.substring(6))
console.log(str.substr(6))
//output:
World!
World!
World!
```
We can see, the first parameter startindex can not be omitted, it represents the beginning of the interception of the string. Second parameter can be omitted, the three method will intercept the string to the end of the string. Look at the following example:

```javascript
let str="Hello World!";
console.log(str.slice(0,5))
console.log(str.substring(0,5))
console.log(str.substr(0,5))
//output:
Hello
Hello
Hello
```
We can see, When the startindex is 0, the results obtained by the three methods are the same. But in fact, their operations are different. `slice()` and `substring()` intercepted characters from index0 to index5 (not including index5). substr  operation is to start from the index0, the interception of a substring of length 5. Look at the following example:

```javascript
let str="Hello beautiful World!";
console.log(str.slice(6,16))
console.log(str.substring(6,16))
console.log(str.substr(6,9))
//output:
beautiful 
beautiful 
beautiful
```
We can see, In order to intercept the same string "beautiful", they use different parameters. Looks like substring and slice usage is similar, what is the difference between them? Look at the following example:
```javascript
let str="Hello beautiful World!";
console.log(str.slice(16,21))
console.log(str.substring(16,21))
console.log(str.slice(16,-1))
//output:
World
World
World
```
From this example we can see that the parameters of the `slice()` can be a negative number. Negative meaning is starting from the right. -1 is first position from the right(at the end of that string).

In a word, for `silce()` and `substring()`, we usually choose to use slice(), because it is more flexible and simple. We can choose to use them according to different needs.

Ok, lesson is over. let's us do some task.

### Task

Coding in function `cutIt`, function accept 1 parameter:`arr`. `arr` is a string array.

The first mission: Traversing `arr`, find the shortest string length.

The second mission: Traversing `arr` again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

```
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
```
    
### [Series](http://github.com/myjinxin2015/Katas-list-of-Training-JS-series)

( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)

 - [#1: create your first JS function helloWorld](http://www.codewars.com/kata/571ec274b1c8d4a61c0000c8)
 - [#2: Basic data types--Number](http://www.codewars.com/kata/571edd157e8954bab500032d)
 - [#3:  Basic data types--String](http://www.codewars.com/kata/571edea4b625edcb51000d8e)
 - [#4:  Basic data types--Array](http://www.codewars.com/kata/571effabb625ed9b0600107a)
 - [#5:  Basic data types--Object](http://www.codewars.com/kata/571f1eb77e8954a812000837)
 - [#6:  Basic data types--Boolean and conditional statements if..else](http://www.codewars.com/kata/571f832f07363d295d001ba8)
 - [#7:  if..else and ternary operator](http://www.codewars.com/kata/57202aefe8d6c514300001fd)
 - [#8: Conditional statement--switch](http://www.codewars.com/kata/572059afc2f4612825000d8a)
 - [#9: loop statement --while and do..while](http://www.codewars.com/kata/57216d4bcdd71175d6000560)
 - [#10: loop statement --for](http://www.codewars.com/kata/5721a78c283129e416000999)
 - [#11: loop statement --break,continue](http://www.codewars.com/kata/5721c189cdd71194c1000b9b)
 - [#12: loop statement --for..in and for..of](http://www.codewars.com/kata/5722b3f0bd5583cf44001000)
 - [#13: Number object and  its properties](http://www.codewars.com/kata/5722fd3ab7162a3a4500031f)
 - [#14: Methods of Number object--toString() and toLocaleString()](http://www.codewars.com/kata/57238ceaef9008adc7000603)
 - [#15: Methods of Number object--toFixed(), toExponential() and toPrecision()](http://www.codewars.com/kata/57256064856584bc47000611)
 - [#16: Methods of String object--slice(), substring() and substr()](http://www.codewars.com/kata/57274562c8dcebe77e001012)
 - [#17: Methods of String object--indexOf(), lastIndexOf() and search()](http://www.codewars.com/kata/57277a31e5e51450a4000010)
 - [#18: Methods of String object--concat() split() and its good friend join()](http://www.codewars.com/kata/57280481e8118511f7000ffa)
 - [#19: Methods of String object--toUpperCase() toLowerCase() and replace()](http://www.codewars.com/kata/5728203b7fc662a4c4000ef3)
 - [#20: Methods of String object--charAt() charCodeAt() and fromCharCode()](http://www.codewars.com/kata/57284d23e81185ae6200162a)
 - [#21: Methods of String object--trim() and the string template](http://www.codewars.com/kata/5729b103dd8bac11a900119e)
 - [#22: Unlock new skills--Arrow function,spread operator and deconstruction](http://www.codewars.com/kata/572ab0cfa3af384df7000ff8)
 - [#23: methods of arrayObject---push(), pop(), shift() and unshift()](http://www.codewars.com/kata/572af273a3af3836660014a1)
 - [#24: methods of arrayObject---splice() and slice()](http://www.codewars.com/kata/572cb264362806af46000793)
 - [#25: methods of arrayObject---reverse() and sort()](http://www.codewars.com/kata/572df796914b5ba27c000c90)
 - [#26: methods of arrayObject---map()](http://www.codewars.com/kata/572fdeb4380bb703fc00002c)
 - [#27: methods of arrayObject---filter()](http://www.codewars.com/kata/573023c81add650b84000429)
 - [#28: methods of arrayObject---every() and some()](http://www.codewars.com/kata/57308546bd9f0987c2000d07)
 - [#29: methods of arrayObject---concat() and join()](http://www.codewars.com/kata/5731861d05d14d6f50000626)
 - [#30: methods of arrayObject---reduce() and reduceRight()](http://www.codewars.com/kata/573156709a231dcec9000ee8)
 - [#31: methods of arrayObject---isArray() indexOf() and toString()](http://www.codewars.com/kata/5732b0351eb838d03300101d)
 - [#32: methods of Math---round() ceil() and floor()](http://www.codewars.com/kata/5732d3c9791aafb0e4001236)
 - [#33: methods of Math---max() min() and abs()](http://www.codewars.com/kata/5733d6c2d780e20173000baa)
 - [#34: methods of Math---pow() sqrt() and cbrt()](http://www.codewars.com/kata/5733f948d780e27df6000e33)
 - [#35: methods of Math---log() and its family](http://www.codewars.com/kata/57353de879ccaeb9f8000564)
 - [#36: methods of Math---kata author's lover:random()](http://www.codewars.com/kata/5735956413c2054a680009ec)
 - [#37: Unlock new weapon---RegExp Object](http://www.codewars.com/kata/5735e39313c205fe39001173)
 - [#38: Regular Expression--"^","$", "." and test()](http://www.codewars.com/kata/573975d3ac3eec695b0013e0)
 - [#39: Regular Expression--"?", "*", "+" and "{}"](http://www.codewars.com/kata/573bca07dffc1aa693000139)
 - [#40: Regular Expression--"|", "[]" and "()"](http://www.codewars.com/kata/573d11c48b97c0ad970002d4)
 - [#41: Regular Expression--"\"](http://www.codewars.com/kata/573e6831e3201f6a9b000971)
 - [#42: Regular Expression--(?:), (?=) and (?!)](http://www.codewars.com/kata/573fb9223f9793e485000453)
