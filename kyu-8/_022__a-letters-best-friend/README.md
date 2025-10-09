# A Letter's Best Friend

**Rank:** 7 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/64fc03a318692c1333ebc04c](https://www.codewars.com/kata/64fc03a318692c1333ebc04c)

---

## 📝 Description

### Task

Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.

### Worked Example

```
("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

('abcdee', 'e', 'e') ➞ False

# For first "e" we can get "ee"
# For second "e" we cannot have "ee"
# Return False
```

### Examples

```
("i found an ounce with my hound", "o", "u") ➞ True

("we found your dynamite", "d", "y") ➞ False
```

### Notes

- All sentences will be given in lowercase.
