# Sum of Multiples

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/57241e0f440cd279b5000829](https://www.codewars.com/kata/57241e0f440cd279b5000829)

---

## 📝 Description

## Your Job

  Find the sum of all multiples of `n` below `m` 
  
  
## Keep in Mind

  * `n` and `m` are natural numbers (positive integers)
  * `m` is **excluded** from the multiples
  
  
## Examples

```javascript
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
```
```csharp
Kata.SumMul(2, 9)   => 2 + 4 + 6 + 8 = 20
Kata.SumMul(3, 13)  => 3 + 6 + 9 + 12 = 30
Kata.SumMul(4, 123) => 4 + 8 + 12 + ... = 1860
Kata.SumMul(4, 1)   // throws ArgumentException
Kata.SumMul(0, 20)  // throws ArgumentException
```
```r
sum_mul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sum_mul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sum_mul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sum_mul(4, -7)  ==> "INVALID"
```
```java
Kata.sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
Kata.sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
Kata.sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
Kata.sumMul(4, -7)  // throws IllegalArgumentException
```
```scala
sumMul(2, 9)   // => 2 + 4 + 6 + 8 = Some(20)
sumMul(3, 13)  // => 3 + 6 + 9 + 12 = Some(30)
sumMul(4, 123) // => 4 + 8 + 12 + ... = Some(1860)
sumMul(4, -7)  // => None (m must be greater than 0)
sumMul(-4, 7)  // => None (n must be greater than 0)
sumMul(0, 2)   // => None
sumMul(2, 0)   // => None
```
```cobol
      SumMul(2, 9)   => 2 + 4 + 6 + 8 = 20
      SumMul(3, 13)  => 3 + 6 + 9 + 12 = 30
      SumMul(4, 123) => 4 + 8 + 12 + ... = 1860
      SumMul(4, 1)   => -1
      SumMul(0, 20)  => -1
```
```c
sum_mul(2, 9)   // => 2 + 4 + 6 + 8 = 20
sum_mul(3, 13)  // => 3 + 6 + 9 + 12 = 30
sum_mul(4, 123) // => 4 + 8 + 12 + ... = 1860
sum_mul(4, -7)  // => -1 (n must be greater than 0)
sum_mul(-4, 7)  // => -1 (m must be greater than 0)
sum_mul(0, 2)   // => -1 (n cannot be equal to 0)
sum_mul(2, 0)   // => -1 (m cannot be equal to 0)
```
