# Training JS #7: if..else and ternary operator

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/57202aefe8d6c514300001fd](https://www.codewars.com/kata/57202aefe8d6c514300001fd)

---

## 📝 Description

In JavaScript, ```if..else``` is the most basic conditional statement,
it consists of three parts:```condition, statement1, statement2```, like this:
```javascript
if (condition) statementa
else           statementb
```
```typescript
if (condition) statementa
else           statementb
```
```coffeescript
if (condition) statementa
else           statementb
```
```java
if (condition) statementa
else           statementb
```
```python
if condition: statementa
else:         statementb
```
```ruby
if condition then statementa
else         statementb end
```
```csharp
if (condition) { doThis(); } 
else           { doThat(); } // Note: This code is valid with or without brackets, but it is strongly recommended to use brackets.
```
It means that if the condition is true, then execute the statementa, otherwise execute the statementb. If the statementa or statementb are more than one line, you need to add `{` and `}` at the head and tail of statements in JS, to keep the same indentation on Python and to put an `end` in Ruby where it indeed ends.

For example, if we want to judge whether a number is odd or even, we can write code like this:
```javascript
function oddEven(n){
  if (n % 2 == 1) return "odd number";
  else            return "even number";
}
```
```typescript
function oddEven(n: number): string {
  if (n % 2 == 1) return "odd number";
  else            return "even number";
}
```
```coffeescript
oddEven=(n)->
  if (n % 2 == 1) return "odd number";
  else            return "even number";

```
```java
public static string OddEven(final int n){
  if (n % 2 == 1) return "odd number";
  else            return "even number";
}
```
```python
def odd_even(n):
    if n % 2: return "odd number"
    else:     return "even number"
```
```ruby
def odd_even(n)
  if n % 2 then return "odd number"
  else          return "even number" end
end
```
```csharp
public static string OddEven(int n)
{
  if (n % 2 == 0) { return "even number"; }
  else            { return "odd number"; }
}
```

If there is more than one condition to judge, we can use the compound if...else statement. For example:
```javascript
function oldYoung(age){
  if (age < 16)      return "children"
  else if (age < 50) return "young man"   //use "else if" if needed
  else               return "old man"
}
```
```typescript
function oldYoung(age: number): string{
  if (age < 16)      return "children"
  else if (age < 50) return "young man"   //use "else if" if needed
  else               return "old man"
}
```
```coffeescript
oldYoung=(age)->
  if (age < 16)      return "children"
  else if (age < 50) return "young man"   //use "else if" if needed
  else               return "old man"

```
```java
public static string OldYoung(final int age){
  if (age < 16)      return "children";
  else if (age < 50) return "young man";   //use "else if" if needed
  else               return "old man";
}
```
```python
def old_young(age):
    if age < 16:        return "children"
    elif age < 50:      return "young man" #use "else if" if needed
    else:               return "old man"
```
```ruby
def old_young(age):
  if age < 16 then   return "children"
  elsif age < 50     return "young man" #use "else if" if needed
  else               return "old man" end
end
```
```csharp
public static string OldYoung(int age)
{
  if (age < 16)      { return "children"; }
  else if (age < 50) { return "young man"; } // use "else if" if needed
  else               { return "old man"; }
}
```
This function returns a different value depending on the parameter age.

Looks very complicated? Well, JS and Ruby also support the ```ternary operator``` and Python has something similar too:
```javascript
condition ? statementa : statementb
```
```typescript
condition ? statementa : statementb
```
```coffeescript
condition ? statementa : statementb
```
```java
condition ? statementa : statementb
```
```python
statementa if condition else statementb
```
```ruby
condition ? statementa : statementb
```
```csharp
condition ? DoThis() : DoThat();
```
Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; in Python you put the condition in the middle of two alternatives.
The two examples above can be simplified with ternary operator:
```javascript
function oddEven(n){
  return n%2 == 1 ? "odd number" : "even number";
}
function oldYoung(age){
  return age < 16 ? "children" : age < 50 ? "young man" : "old man";
}
```
```typescript
function oddEven(n: number): string {
  return n % 2 == 1 ? "odd number" : "even number";
}
function oldYoung(age: number): string {
  return age < 16 ? "children" : age < 50 ? "young man" : "old man";
}
```
```coffeescript
oddEven=(n)->
  return n % 2 == 1 ? "odd number" : "even number";

oldYoung=(age)->
  return age < 16 ? "children" : age < 50 ? "young man" : "old man";

```
```java
public static string OddEven(final int n){
  return n % 2 == 1 ? "odd number" : "even number";
}
public static string OldYoung(final int age){
  return age < 16 ? "children" : age < 50 ? "young man" : "old man";
}
```
```python
def odd_even(n):
    return "odd number" if n % 2 else "even number"
def old_young(age):
    return "children" if age < 16 else "young man" if age < 50 else "old man"
```
```ruby
def odd_even(n):
  return n % 2 == 1 ? "odd number" : "even number"
end
def old_young(age):
  return age < 16 ? "children" : age < 50 ? "young man" : "old man"
end
```
```csharp
public static int OldYoung(int age)
{
  return age < 16 ? "children" : age < 50 ? "young man" : "old man";
}
```

## Task:
Complete function `saleHotdogs`/`SaleHotDogs`/`sale_hotdogs`, function accepts 1 parameter:`n`, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

|  number of hotdogs   | price per unit (cents)|
|------------|-------------|
|n < 5       |    100      |
|n >= 5 and n < 10  |  95  |
|n >= 10     |     90      |


You can use if..else or ternary operator to complete it.
    
    When you have finished the work, click "Run Tests" to see if your code is working properly.
    
    In the end, click "Submit" to submit your code and pass this kata.
    
## [Series](http://github.com/myjinxin2015/Katas-list-of-Training-JS-series):

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
