# Highest and Lowest

**Rank:** 7 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/554b4ac871d6813a03000035](https://www.codewars.com/kata/554b4ac871d6813a03000035)

---

## 📝 Description

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

### Examples
``` text
Input: "1 2 3 4 5"   =>  Output: "5 1"
Input: "1 2 -3 4 5"  =>  Output: "5 -3"
Input: "1 9 3 4 -5"  =>  Output: "9 -5"
```
```php
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```
```csharp
Kata.HighAndLow("1 2 3 4 5"); // return "5 1"
Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"
```
```fsharp
highAndLow "1 2 3 4 5" // return "5 1"
highAndLow "1 2 -3 4 5" // return "5 -3"
highAndLow "1 9 3 4 -5" // return "9 -5"
```
```javascript
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```
```d
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```
```c
high_and_low("1 2 3 4 5") // return "5 1"
high_and_low("1 2 -3 4 5") // return "5 -3"
high_and_low("1 9 3 4 -5") // return "9 -5"
```
```cpp
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```
```typescript
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
```
```coffeescript
highAndLow("1 2 3 4 5") # return "5 1"
highAndLow("1 2 -3 4 5") # return "5 -3"
highAndLow("1 9 3 4 -5") # return "9 -5"
```
```python
high_and_low("1 2 3 4 5") # return "5 1"
high_and_low("1 2 -3 4 5") # return "5 -3"
high_and_low("1 9 3 4 -5") # return "9 -5"
```
```ruby
high_and_low("1 2 3 4 5") # return "5 1"
high_and_low("1 2 -3 4 5") # return "5 -3"
high_and_low("1 9 3 4 -5") # return "9 -5"
```
```crystal
high_and_low("1 2 3 4 5") # return "5 1"
high_and_low("1 2 -3 4 5") # return "5 -3"
high_and_low("1 9 3 4 -5") # return "9 -5"
```
```c
high_and_low("1 2 3 4 5", result) // result "5 1"
high_and_low("1 2 -3 4 5", result) // result "5 -3"
high_and_low("1 9 3 4 -5", result) // result "9 -5"
```
```java
highAndLow("1 2 3 4 5") // return "5 1"
highAndLow("1 2 -3 4 5") // return "5 -3"
highAndLow("1 9 3 4 -5") // return "9 -5"
```
```haskell
highAndLow "1 2 3 4 5") -- return "5 1"
highAndLow "1 2 -3 4 5") -- return "5 -3"
highAndLow "1 9 3 4 -5") -- return "9 -5"
```
```go
HighAndLow("1 2 3 4 5") // return "5 1"
HighAndLow("1 2 -3 4 5") // return "5 -3"
HighAndLow("1 9 3 4 -5") // return "9 -5"
```
```kotlin
highAndLow("1 2 3 4 5") // return "5 1"
highAndLow("1 2 -3 4 5") // return "5 -3"
highAndLow("1 9 3 4 -5") // return "9 -5"
```
```elixir
Kata.high_and_low("1 2 3 4 5") # return "5 1"
Kata.high_and_low("1 2 -3 4 5") # return "5 -3"
Kata.high_and_low("1 9 3 4 -5") # return "9 -5"
```
```clojure
(high-and-low "1 2 3 4 5") ; return "5 1"
(high-and-low "1 2 -3 4 5") ; return "5 -3"
(high-and-low "1 9 3 4 -5") ; return "9 -5"
```
```julia
highandlow("1 2 3 4 5") # return "5 1"
highandlow("1 2 -3 4 5") # return "5 -3"
highandlow("1 9 3 4 -5") # return "9 -5"
```
```rust
high_and_low("1 2 3 4 5") // return "5 1"
high_and_low("1 2 -3 4 5") // return "5 -3"
high_and_low("1 9 3 4 -5") // return "9 -5"
```
```cobol
            HighAndLow("1 2 3 4 5")
            * RESULT = "5 1"
            HighAndLow("1 2 -3 4 5")
            * RESULT = "5 -3"
            HighAndLow("1 9 3 4 -5")
            * RESULT = "9 -5"
```
```scala
Sol.high_and_low("1 2 3 4 5") // return "5 1"
Sol.high_and_low("1 2 -3 4 5") // return "5 -3"
Sol.high_and_low("1 9 3 4 -5") // return "9 -5"
```
```lua
high_and_low "1 2 3 4 5" --> return "5 1"
high_and_low "1 2 -3 4 5" --> return "5 -3"
high_and_low "1 9 3 4 -5" --> return "9 -5"
```
```groovy
Kata.highAndLow("1 2 3 4 5") // return "5 1"
Kata.highAndLow("1 2 -3 4 5") // return "5 -3"
Kata.highAndLow("1 9 3 4 -5") // return "9 -5"
```
```dart
highAndLow("1 2 3 4 5") // return "5 1"
highAndLow("1 2 -3 4 5") // return "5 -3"
highAndLow("1 9 3 4 -5") // return "9 -5"
```

### Notes

- All numbers are valid `Int32`, no *need* to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest number is first.
