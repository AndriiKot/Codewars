# Duck Duck Goose

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/582e0e592029ea10530009ce](https://www.codewars.com/kata/582e0e592029ea10530009ce)

---

## 📝 Description

The objective of [Duck, duck, goose](https://en.wikipedia.org/wiki/Duck,_duck,_goose) is to _walk in a circle_, tapping on each player's head until one is chosen.

----

Task:
Given an array of Player objects and a position (first position is 1), return the `name` of the chosen Player.<br>`name` is a property of `Player` objects, e.g `Player.name`


----

Example:


```
duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
```



----

Random input limits:
* `$6 \le \text{Players} \le 50$`
* `$5000 \le \text{Position} \le 50000$`
