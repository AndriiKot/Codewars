# Moving Zeros To The End

**Rank:** 5 kyu  
**Category:** algorithms  
**URL:** [https://www.codewars.com/kata/52597aa56021e91c93000cb0](https://www.codewars.com/kata/52597aa56021e91c93000cb0)

---

## 📝 Description

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```php
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```
```javascript
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```
```python
move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]
```
```cpp
move_zeros({1, 0, 1, 2, 0, 1, 3}) // returns {1, 1, 2, 1, 3, 0, 0}
```
```coffeescript
moveZeros [false,1,0,1,2,0,1,3,"a"] # returns[false,1,1,2,1,3,"a",0,0]
```
```csharp
Kata.MoveZeroes(new int[] {1, 2, 0, 1, 0, 1, 0, 3, 0, 1}) => new int[] {1, 2, 1, 1, 3, 1, 0, 0, 0, 0}
```
```go
MoveZeros([]int{1, 2, 0, 1, 0, 1, 0, 3, 0, 1}) // returns []int{ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 }
```
```haskell
moveZeros [1,2,0,1,0,1,0,3,0,1] -> [1,2,1,1,3,1,0,0,0,0]
```
```factor
{ 1 2 0 1 0 1 0 3 0 1 } move-zeros -> { 1 2 1 1 3 1 0 0 0 0 }
```
```ruby
moveZeros [1,2,0,1,0,1,0,3,0,1] #-> [1,2,1,1,3,1,0,0,0,0]
```
```c
move_zeros(10, int [] {1, 2, 0, 1, 0, 1, 0, 3, 0, 1}); // -> int [] {1, 2, 1, 1, 3, 1, 0, 0, 0, 0}
```
```scala
moveZeroes(List(1, 0, 1, 2, 0, 1, 3)) // -> List(1, 1, 2, 1, 3, 0, 0)
```
```bf
"1012013\0"   -->   "1121300"
```
