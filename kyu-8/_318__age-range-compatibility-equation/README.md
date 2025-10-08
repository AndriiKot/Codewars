# Age Range Compatibility Equation

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/5803956ddb07c5c74200144e](https://www.codewars.com/kata/5803956ddb07c5c74200144e)

---

## 📝 Description

Everybody knows the classic ["half your age plus seven"](https://en.wikipedia.org/wiki/Age_disparity_in_sexual_relationships#%22Half-your-age-plus-seven%22_rule) dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone. 

<!-- Original link is dead.
<img src="http://weknowmemes.com/wp-content/uploads/2014/08/age-range-compatibility-equation.jpg" style="width: 400px;"/>
-->

<!-- archive.org link image as backup.
<img src="http://web.archive.org/web/20190206114947if_/http://weknowmemes.com/wp-content/uploads/2014/08/age-range-compatibility-equation.jpg" style="width: 400px;"/>
-->


* `$\text{Min} = \dfrac{ \text{Age} } {2} + 7$`

* `$\text{Max} = 2 \cdot (\text{Age - 7})$`

* `$\text{Minimum age} \le \text{Your age} \le \text{Maximum age}$`


## Task

Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so if the age <= 14, use this equation instead:

```
min = age - 0.10 * age
max = age + 0.10 * age
```

You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form ```"[min]-[max]"```


## Examples:

```
age = 27   =>   "20-40"
age = 5    =>   "4-5"
age = 17   =>   "15-20"
```
