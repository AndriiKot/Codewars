# List Filtering

**Rank:** 7 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/53dbd5315a3c69eed20002dd](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd)

---

## 📝 Description

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

### Example

```python
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```
```csharp
ListFilterer.GetIntegersFromList(new List<object>(){1, 2, "a", "b"}) => {1, 2}
ListFilterer.GetIntegersFromList(new List<object>(){1, "a", "b", 0, 15}) => {1, 0, 15}
ListFilterer.GetIntegersFromList(new List<object>(){1, 2, "a", "b", "aasf", "1", "123", 123}) => {1, 2, 231}
```
```factor
{ 1 2 "a" "b" } filter-seq ! { 1 2 }
{ 1 "a" "b" 0 15 } filter-seq ! { 1 0 15 }
{ 1 2 "aasf" "1" "123" 123 } filter-seq ! { 1 2 123 }
```
```java
Kata.filterList(List.of(1, 2, "a", "b")) => List.of(1,2)
Kata.filterList(List.of(1, "a", "b", 0, 15)) => List.of(1,0,15)
Kata.filterList(List.of(1, 2, "a", "b", "aasf", "1", "123", 123)) => List.of(1, 2, 123)
```
```scala
filterList(List(1, 2, "a", "b")) == List(1, 2)
filterList(List(1, "a", "b", 0, 15)) == List(1, 0, 15)
filterList(List(1, 2, "aasf", "1", "123", 123)) == List(1, 2, 123)
```
```kotlin
filterList(ListOf(1, 2, "a", "b")) == [1, 2]
filterList(ListOf(1, "a", "b", 0, 15)) == [1, 0, 15]
filterList(ListOf(1, 2, "a", "b", "aasf", "1", "123", 123)) == [1, 2, 123]
```
