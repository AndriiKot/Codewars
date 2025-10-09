# Two Sum

**Rank:** 6 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/52c31f8e6605bcc646000082](https://www.codewars.com/kata/52c31f8e6605bcc646000082)

---

## 📝 Description

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indexes of these items should then be returned in a tuple / list (depending on your language) like so: `(index1, index2)`.

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

```elixir
two_sum([1, 2, 3], 4) == {0, 2}
two_sum([3, 2, 4], 6) == {1, 2}
```
```lambdacalc
two-sum < 1 2 3 > 4 # returns (0, 2) or (2, 0)
two-sum < 3 2 4 > 6 # returns (1, 2) or (2, 1)
```
```cpp
two_sum({1, 2, 3}, 4); // returns {0, 2} or {2, 0}
two_sum({3, 2, 4}, 6); // returns {1, 2} or {2, 1}
```
```go
TwoSum([]int{1, 2, 3}, 4) // returns [2]int{0, 2}
// the go translation has an issue where random tests accept either [2]int{0, 2} or [2]int{2, 0}, but fixed tests and sample tests demand the resulting slice to be sorted!
// untill it's fixed, please sort your result in go.
```
```haskell
twoSum [1, 2, 3] 4 === (0, 2)
twoSum [3, 2, 4] 6 === (1, 2)
```
```javascript
twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
```
```python
two_sum([1, 2, 3], 4) # returns (0, 2) or (2, 0)
two_sum([3, 2, 4], 6) # returns (1, 2) or (2, 1)
```
```rust
two_sum(&[1, 2, 3], 4) // return (0, 2) or (2, 0)
two_sum(&[3, 2, 4], 6) // return (1, 2) or (2, 1)
```
```cobol
      TwoSum([1, 2, 3], 4) => result = [1, 3]
      TwoSum([3, 2, 4], 6) => result = [1, 2]      
```
```scala
twoSum(List(1, 2, 3), 4) // (0, 2) or (2, 0)
twoSum(List(3, 2, 4), 6) // (1, 2) or (2, 1)
```
