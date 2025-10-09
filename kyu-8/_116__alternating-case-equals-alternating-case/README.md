# altERnaTIng cAsE <=> ALTerNAtiNG CaSe

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/56efc695740d30f963000557](https://www.codewars.com/kata/56efc695740d30f963000557)

---

## 📝 Description

# altERnaTIng cAsE <=> ALTerNAtiNG CaSe


Define `String.prototype.toAlternatingCase` (or a similar function/method *such as* `to_alternating_case`/`toAlternatingCase`/`ToAlternatingCase` in your selected language; **see the initial solution for details**) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
```javascript
"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
```
```dart
toAlternatingCase("hello world") === "HELLO WORLD"
toAlternatingCase("HELLO WORLD") === "hello world"
toAlternatingCase("hello WORLD") === "HELLO world"
toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
toAlternatingCase("12345")       === "12345" // Non-alphabetical characters are unaffected
toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
```
```ruby
"hello world".to_alternating_case() === "HELLO WORLD"
"HELLO WORLD".to_alternating_case() === "hello world"
"hello WORLD".to_alternating_case() === "HELLO world"
"HeLLo WoRLD".to_alternating_case() === "hEllO wOrld"
"12345".to_alternating_case()       === "12345"                 # Non-alphabetical characters are unaffected
"1a2b3c4d5e".to_alternating_case()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".to_alternating_case() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
```
```crystal
"hello world".to_alternating_case() === "HELLO WORLD"
"HELLO WORLD".to_alternating_case() === "hello world"
"hello WORLD".to_alternating_case() === "HELLO world"
"HeLLo WoRLD".to_alternating_case() === "hEllO wOrld"
"12345".to_alternating_case()       === "12345"                # Non-alphabetical characters are unaffected
"1a2b3c4d5e".to_alternating_case()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".to_alternating_case() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
```
```java
StringUtils.toAlternativeString("hello world") == "HELLO WORLD"
StringUtils.toAlternativeString("HELLO WORLD") == "hello world"
StringUtils.toAlternativeString("hello WORLD") == "HELLO world"
StringUtils.toAlternativeString("HeLLo WoRLD") == "hEllO wOrld"
StringUtils.toAlternativeString("12345") == "12345" // Non-alphabetical characters are unaffected
StringUtils.toAlternativeString("1a2b3c4d5e") == "1A2B3C4D5E"
StringUtils.toAlternativeString("StringUtils.toAlternatingCase") == "sTRINGuTILS.TOaLTERNATINGcASE"
```
``` haskell
toAlternatingCase "hello world" `shouldBe` "HELLO WORLD"
toAlternatingCase "HELLO WORLD" `shouldBe` "hello world"
toAlternatingCase "hello WORLD" `shouldBe` "HELLO world"
toAlternatingCase "HeLLo WoRLD" `shouldBe` "hEllO wOrld"
toAlternatingCase "12345"       `shouldBe` "12345"
toAlternatingCase "1a2b3c4d5e"  `shouldBe` "1A2B3C4D5E"
```
```csharp
"hello world".ToAlternatingCase() == "HELLO WORLD"
"HELLO WORLD".ToAlternatingCase() == "hello world"
"hello WORLD".ToAlternatingCase() == "HELLO world"
"HeLLo WoRLD".ToAlternatingCase() == "hEllO wOrld"
"12345".ToAlternatingCase() == "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".ToAlternatingCase() == "1A2B3C4D5E"
"String.ToAlternatingCase".ToAlternatingCase() == "sTRING.tOaLTERNATINGcASE"
```
```elixir
alter_case("hello world") == "HELLO WORLD"
alter_case("HELLO WORLD") == "hello world"
alter_case("hello WORLD") == "HELLO world"
alter_case("HeLLo WoRLD") == "hEllO wOrld"
alter_case("12345")       == "12345"                        # Non-alphabetical characters are unaffected
alter_case("1a2b3c4d5e")  == "1A2B3C4D5E"
alter_case("StringUtils.toAlternatingCase") == "sTRINGuTILS.TOaLTERNATINGcASE"
```
```julia
to_alternating_case("hello world") # => "HELLO WORLD"
to_alternating_case("HELLO WORLD") # => "hello world"
to_alternating_case("hello WORLD") # => "HELLO world"
to_alternating_case("HeLLo WoRLD") # => "hEllO wOrld"
to_alternating_case("12345") # => "12345" (Non-alphabetical characters are unaffected)
to_alternating_case("1a2b3c4d5e") # => "1A2B3C4D5E"
to_alternating_case("String.prototype.toAlternatingCase") # => "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
```
```c
to_alternating_case("hello world"); // => "HELLO WORLD"
to_alternating_case("HELLO WORLD"); // => "hello world"
to_alternating_case("hello WORLD"); // => "HELLO world"
to_alternating_case("HeLLo WoRLD"); // => "hEllO wOrld"
to_alternating_case("12345"); // => "12345" (Non-alphabetical characters are unaffected)
to_alternating_case("1a2b3c4d5e"); // => "1A2B3C4D5E"
to_alternating_case("String.prototype.toAlternatingCase"); // => "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
```
```C++
string source = "HeLLo WoRLD";
string upperCase = to_alternating_case(source);
cout << upperCase << endl; // outputs: hEllO wOrld
```
```typescript
toAlternatingCase("hello world") === "HELLO WORLD"
toAlternatingCase("HELLO WORLD") === "hello world"
toAlternatingCase("hello WORLD") === "HELLO world"
toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
toAlternatingCase("12345")       === "12345"                   // Non-alphabetical characters are unaffected
toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
```
```factor
"hello world" >alternating ! "HELLO WORLD"
"HELLO WORLD" >alternating ! "hello world"
"hello WORLD" >alternating ! "HELLO world"
"HeLLo WoRLD" >alternating ! "hEllO wOrld"
"12345" >alternating ! "12345" (Non-alphabetical characters are unaffected)
"1a2b3c4d5e" >alternating ! "1A2B3C4D5E"
"String.prototype.toAlternatingCase" >alternating ! "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
```
```go
ToAlternatingCase("hello world"); // => "HELLO WORLD"
ToAlternatingCase("HELLO WORLD"); // => "hello world"
ToAlternatingCase("hello WORLD"); // => "HELLO world"
ToAlternatingCase("HeLLo WoRLD"); // => "hEllO wOrld"
ToAlternativeCase("12345"); // => "12345" 
ToAlternativeCase("1a2b3c4d5e"); // => "1A2B3C4D5E"
ToAlternativeCase("String.prototype.toAlternatingCase"); // => "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
```
```scala
"hello world".toAlternatingCase // => "HELLO WORLD"
"HELLO WORLD".toAlternatingCase // => "hello world"
"hello WORLD".toAlternatingCase // => "HELLO world"
"HeLLo WoRLD".toAlternatingCase // => "hEllO wOrld"
"12345".toAlternatingCase       // => "12345" (Non-alphabetical characters are unaffected)
"1a2b3c4d5e".toAlternatingCase  // => "1A2B3C4D5E"
```
```lua
to_alternating_case "hello world" --> "HELLO WORLD"
to_alternating_case "HELLO WORLD" --> "hello world"
to_alternating_case "hello WORLD" --> "HELLO world"
to_alternating_case "HeLLo WoRLD" --> "hEllO wOrld"
to_alternating_case "12345" --> "12345" (Non-alphabetical characters are unaffected)
to_alternating_case "1a2b3c4d5e" --> "1A2B3C4D5E"
to_alternating_case "String.prototype.toAlternatingCase" --> "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
```

As usual, your function/method should be pure, i.e. it should **not** mutate the original string.
