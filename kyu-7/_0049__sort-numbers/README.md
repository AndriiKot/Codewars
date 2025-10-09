# Sort Numbers

**Rank:** 7 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/5174a4c0f2769dd8b1000003](https://www.codewars.com/kata/5174a4c0f2769dd8b1000003)

---

## 📝 Description

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

```r
solution(c(1, 2, 3, 10, 5)) # should return c(1, 2, 3, 5, 10)
solution(NULL)              # should return NULL
```
```php
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
```
```javascript
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
```
```typescript
solution([1, 2, 10, 50, 5]); // should return [1, 2, 5, 10, 50]
solution([]); // should return []
```
```coffeescript
solution([1, 2, 10, 50, 5]) # should return [1,2,5,10,50]
solution(null) # should return []
```
```ruby
solution([1, 2, 10, 50, 5]) # should return [1,2,5,10,50]
solution(nil) # should return []
```
```python
solution([1,2,3,10,5]) # should return [1,2,3,5,10]
solution(None) # should return []
```
```julia
solution([1, 2, 10, 50, 5]) # should return [1,2,5,10,50]
solution(nothing) # should return []
```
```csharp
SortNumbers(new int[] { 1, 2, 10, 50, 5 }); // should return new int[] { 1, 2, 5, 10, 50 }
SortNumbers(null); // should return new int[] { }
```
```rust
sort_numbers(&vec![1, 2, 3, 10, 5]); // should return vec![1, 2, 3, 5, 10]
sort_numbers(&vec![]); // should return !vec[]
```
```haskell
sortNumbers [1, 2, 10, 50, 5] = Just [1, 2, 5, 10, 50]
sortNumbers [] = Nothing
```
```lambdacalc
# (Note in Lambda Calculus we have lists instead of arrays.)
nums = cons 1 (cons 2 (cons 10 (cons 50 (cons 5 nil))))
sort nums # cons 1 (cons 2 (cons 5 (cons 10 (cons 50 nil))))
```
```cpp
sortNumbers({1, 2, 10, 50, 5}) // sholud return {1, 2, 5, 10, 50}
sortNumbers({}) // should return {}
```
```c
int array[5] = {1, 2, 10, 50, 5};
sort_ascending(5, array); // array is now {1, 2, 5, 10, 50}
sort_ascending(0, NULL); // nothing to do for empty array
```
```cobol
      SortNumbers([1, 2, 10, 50, 5])
      *  -> res = [1, 2, 5, 10, 50]
      SortNumbers([])
      *  -> res = []
```
```scala
sol(List(0, 3, 2, 5, 4, 1)) // returns List(0, 1, 2, 3, 4, 5)
sol(List()) // returns List()
```
```crystal
solution([1, 2, 10, 50, 5]) # should return [1,2,5,10,50]
solution(nil) # should return [] of Int32
```
