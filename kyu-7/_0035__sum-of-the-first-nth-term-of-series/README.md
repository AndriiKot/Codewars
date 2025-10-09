# Sum of the first nth term of Series

**Rank:** 7 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/555eded1ad94b00403000071](https://www.codewars.com/kata/555eded1ad94b00403000071)

---

## 📝 Description

## Task

Your task is to write a function which returns the `n`-th term of the following series, which is the sum of the first `n` terms of the sequence (`n` is the input parameter).

```math
\mathrm{Series:}\quad 1 + \frac14 + \frac17 + \frac1{10} + \frac1{13} + \frac1{16} + \dots
```

You will need to figure out the rule of the series to complete this.
 
## Rules
 
* You need to round the answer to 2 decimal places and return it as String.

* If the given value is `0` then it should return `"0.00"`.

* You will only be given Natural Numbers as arguments.

## Examples (Input --> Output)

    n
    1 --> 1 --> "1.00"
    2 --> 1 + 1/4 --> "1.25"
    5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
