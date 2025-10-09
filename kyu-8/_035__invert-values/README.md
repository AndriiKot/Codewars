# Invert values

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad)

---

## 📝 Description

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

```
[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
```

```if:javascript,python,ruby,php,elixir,dart,go,lua
You can assume that all values are integers. Do not mutate the input array.
```

```if:c,riscv
### Notes:
- All values are greater than `INT_MIN`
- The input should be modified, not returned.
```
