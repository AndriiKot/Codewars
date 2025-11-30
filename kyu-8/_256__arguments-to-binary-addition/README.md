# Arguments to Binary addition

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/57642a90dee2da8dd3000161](https://www.codewars.com/kata/57642a90dee2da8dd3000161)

---

## 📝 Description

Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

If your language can handle float binaries assume the array won't contain float or doubles.

```javascript
arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
```
```coffeescript
arr2bin [1,2] == '11'
arr2bin [1,2,'a'] == '11'
arr2bin [] == '0'
```
```typescript
arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'
```

```php
arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'
```

Return `"NaN"`  if the sum of all numbers is `NaN`.

This is a modification on the Kata: `Array2Binary addition` hope you like it
