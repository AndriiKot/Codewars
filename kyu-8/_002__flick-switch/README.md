# Flick Switch

**Rank:** 8 kyu  
**Category:** reference  
**Slug:** `flick-switch`  
**URL:** [https://www.codewars.com/kata/64fbfe2618692c2018ebbddb](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)

---

## 📝 Description

### Task

Create a function that always returns `True`/`true` for every item in a given list.  
However, if an element is the word **'flick'**, switch to always returning the opposite boolean value.

### Examples

```python
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
```

### Notes

- "flick" will always be given in lowercase.
- A list may contain multiple flicks.
- Switch the boolean value on the same element as the flick itself.
