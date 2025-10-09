# Remove First and Last Character

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)

---

## 📝 Description

# Remove First and Last Character

## Task

Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

**Important:** Your function should handle strings of any `length ≥ 2` characters. For strings with exactly `2` characters, return an empty string.

## Examples

```javascript
'eloquent' --> 'loquen'
'country'  --> 'ountr' 
'person'   --> 'erso'
'ab'       --> '' (empty string)
'xyz'      --> 'y'
```

## Requirements

- The input string will always have at least 2 characters
- For strings with exactly 2 characters, return an empty string
- For strings with 3 or more characters, remove the first and last character
- The function should handle strings containing letters, numbers, and special characters

## Test Cases

Your solution will be tested against:
- Basic functionality with common words
- Edge cases with 2-character and 3-character strings
- Strings containing numbers and special characters
- Random test cases of varying lengths
