# The 'if' function

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/54147087d5c2ebe4f1000805](https://www.codewars.com/kata/54147087d5c2ebe4f1000805)

---

## 📝 Description

Create a function that takes three arguments:

1. a value to be evaluated for truthiness.
2. a function to execute if the first argument is truthy.
3. a function to execute if the first argument is falsy.

If the first argument evaluates to _truthy_, call the second argument (a function).
If it evaluates to _falsy_, call the third argument instead (also a function).

In statically-typed languages, the first argument will be a boolean. In dynamically-typed languages that attribute a truth value to all expressions, it may be of any type.
