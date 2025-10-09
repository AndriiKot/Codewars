# Counting Sheep

**Rank:** unknown  
**Category:** algorithms  
**URL:** [https://www.codewars.com/kata/5e724167fdda1d0032551e64](https://www.codewars.com/kata/5e724167fdda1d0032551e64)

---

## 📝 Description

It's 10:00 PM And it's past your bed time. You start hallucinating and seeing sheep. There are 3 sheep named Mary, Bob, and Will. You count them in order "Mary, Bob, Will, Mary, Bob, Will..." And so forth. You start counting from 1 - Mary, 2- Bob, 3- Will and so on and so forth.

You keep counting but you get so tired you lose track of what sheep you are on. 
However, every 10 sheep you count, you miss a sheep. (Ex. 9: Will, 10: Bob)
Thus, you write a program that finds the name of the sheep depending on the number of sheep you counted called sheepCount(num) where num is the number of sheep you counted. It also has to take in count for the sheep you skip by mistake.

```javascript
Example : sheepCount(3) Will return "Will" 
Example : sheepCount(12) Will return "Mary" <= Counts the sheep you skipped
```
