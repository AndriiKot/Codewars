# Calculating with Functions

**Rank:** 5 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39)

---

## 📝 Description

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

```javascript
seven(times(five()));   //  must return 35
four(plus(nine()));     //  must return 13
eight(minus(three()));  //  must return 5
six(dividedBy(two()));  //  must return 3
```
```haskell
seven $ times $ five   ->  35 :: Int
four $ plus $ nine     ->  13 :: Int
eight $ minus $ three  ->   5 :: Int
six $ dividedBy $ two  ->   3 :: Int
```
```lambdacalc
seven (times (five))    ->  35
four (plus (nine))      ->  13
eight (minus (three))   ->   5
six (divided-by (two))  ->   3
```
```ruby
seven(times(five))    #  must return 35
four(plus(nine))      #  must return 13
eight(minus(three))   #  must return 5
six(divided_by(two))  #  must return 3
```
```python
seven(times(five()))    #  must return 35
four(plus(nine()))      #  must return 13
eight(minus(three()))   #  must return 5
six(divided_by(two()))  #  must return 3
```
```factor
seven multiplied-by five   ! must evaluate to 35
four plus nine             ! must evaluate to 13
eight minus three          ! must evaluate to 5
six divided-by two         ! must evaluate to 3
```
```cpp
seven(times(five()));    //  must return 35
four(plus(nine()));      //  must return 13
eight(minus(three()));   //  must return 5
six(divided_by(two()));  //  must return 3
```
```ocaml
seven @@ times      @@ five   (*  must return 35  *)
four  @@ plus       @@ nine   (*  must return 13  *)
eight @@ minus      @@ three  (*  must return  5  *)
six   @@ divided_by @@ two    (*  must return  3  *)
```
```scala
seven(times(five))   ==  35
four(plus(nine))     ==  13
eight(minus(three))  ==   5
six(dividedBy(two))  ==   3
```

Requirements:



* There must be a function for each number from 0 ("zero") to 9 ("nine")
* There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
* Each calculation consist of exactly one operation and two numbers
* The most outer function represents the left operand, the most inner function represents the right operand
* Division should be **integer division**. For example, this should return `2`, not `2.666666...`:


```javascript
eight(dividedBy(three()));
```
```haskell
eight $ dividedBy $ three
```
```ruby
eight(divided_by(three))
```
```python
eight(divided_by(three()))
```
```cpp
eight(divided_by(three()));
```
```ocaml
eight @@ divided_by @@ three
```
```factor
eight divided-by three
```
```lambdacalc
eight (divided-by (three))
```
```scala
eight(dividedBy(three))
```
