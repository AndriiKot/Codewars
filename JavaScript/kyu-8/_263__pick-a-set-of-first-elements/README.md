# pick a set of first elements

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/572b77262bedd351e9000076](https://www.codewars.com/kata/572b77262bedd351e9000076)

---

## 📝 Description

Write a function to get the first element(s) of a sequence. Passing a parameter `n` (default=`1`) will return the first `n` element(s) of the sequence. 

If `n` == `0` return an empty sequence `[]`

### Examples

```javascript
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
```

```csharp
var arr = new object[] { 'a', 'b', 'c', 'd', 'e' };
Kata.TakeFirstElements(arr); //=> new object[] { 'a' }
Kata.TakeFirstElements(arr, 2);// => new object[] { 'a', 'b' }
Kata.TakeFirstElements(arr, 3); //=> new object[] { 'a', 'b', 'c' }
Kata.TakeFirstElements(arr, 0); //=> new object[] { }
```

```python
arr = ['a', 'b', 'c', 'd', 'e']
first(arr)    # --> ['a']
first(arr, 2) # --> ['a', 'b']
first(arr, 3) # --> ['a', 'b', 'c']
first(arr, 0) # --> []
```
