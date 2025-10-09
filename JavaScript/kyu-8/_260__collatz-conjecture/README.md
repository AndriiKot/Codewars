# Collatz Conjecture

**Rank:** unknown  
**Category:** algorithms  
**URL:** [https://www.codewars.com/kata/5298ba409ce9541aad000537](https://www.codewars.com/kata/5298ba409ce9541aad000537)

---

## 📝 Description

### Problem Statement

Consider the following algorithm to generate a sequence of numbers. Start with a natural number *n*. If *n* is even, divide by 2. If *n* is odd, multiply by 3 and add 1. Repeat this process with the new value of *n*, terminating when *n = 1.* 

For example, the following sequence of numbers will be generated for *n = 22*:

`22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1`

It is **conjectured** (but not yet proven) that this algorithm will terminate at *n = 1* for every integer *n*. Still the conjecture holds for all integers up to at least 1,000,000.

For an input n, the **cycle length of n** is the number of numbers generated up to and including 1. In the example above, the cycle length of 22 is 16.

Given two numbers *i* and *j*, you are to determine the maximum *cycle length* over all numbers between *i* and *j*, including both endpoints.


 - `expect maxCycleLength(1,10) to be 20`.
 - `expect maxCycleLength(100,200) to be 125`.
 - `expect maxCycleLength(201,210)  to be 89`.
 - `expect maxCycleLength(900,1000) to be 174`.

### Assumptions

Assume the  numbers *i* and *j* will be positive numbers bigger than 0, where *i* is equal to or smaller than *j*. In other words: 0 < i <= j.

### Further Reading

To find out more read the Wikipedia article on [Collatz Conjecture](http://en.wikipedia.org/wiki/Collatz_conjecture).  
This problem was taken from the book [Programming Challenges](http://www.amazon.com/Programming-Challenges-Contest-Training-Computer/dp/0387001638/ref=sr_1_1?ie=UTF8&qid=1385738933&sr=8-1&keywords=programming+challenges).
