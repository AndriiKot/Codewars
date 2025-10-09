# Alphabetical Addition

**Rank:** 7 kyu  
**Category:** algorithms  
**URL:** [https://www.codewars.com/kata/5d50e3914861a500121e1958](https://www.codewars.com/kata/5d50e3914861a500121e1958)

---

## 📝 Description

Your task is to add up letters to one letter.
```if-not:haskell,crystal,cpp,dart,elixir,reason,c,r,factor,java,swift,racket,bf,go,clojure,csharp,elm,lua,nim,kotlin,groovy,scala,sql,fortran,rust,fsharp,objc,powershell,vb,erlang,cfml,prolog,shell,haxe
The function will be given a variable amount of arguments, each one being a letter to add.
```
```if:crystal,reason,factor,lua,cfml,haxe
The function will be given an array of letters, each one being a letter to add.
```
```if:sql
In SQL, you will be given a table `letters`, with a string column `letter`. Return the sum of the letters in a column `letter`.
```
```if:csharp
The function will be given an array of letters (`char`s), each one being a letter to add. Return a `char`.
```
```if:shell
The script will be given a string of letters, each character being a letter to add.
```
```if:vb
The function will be given a `Char()`, each one being a letter to add. Return a `Char`.
```
```if:purescript
The function will be given an `Array Char` each one being a letter to add. Return a `Char`.
```
```if:fsharp
The function will be given a `List<char>` of letters, each one being a letter to add. Return a `char`.
```
```if:racket,elm
The function will be given a list of letters (chars), each one being a letter to add. Return a char.
```
```if:groovy
The function will be given a list of letters (strings), each one being a letter to add.
```
```if:nim
The function will be given a sequence of letters (chars), each one being a letter to add. Return a char.
```
```if:go
The function will be given a slice of letters (runes), each one being a letter to add. Return a rune.
```
```if:haskell,dart,elixir,prolog
The function will be given a list of letters, each one being a letter to add.
```
```if:erlang
The function will be given a character list (that's actually a string in Erlang, technically :D) of letters, each one being a letter to add.
```
```if:clojure,cpp
The function will be given a vector of letters, each one being a letter (chars) to add. Return a char.
```
```if:r
The function will be given a vector of letters, each one being a letter to add.
```
```if:c,objc
The function will be given the array size, and an array of characters, each one being a letter to add.
```
```if:java
The function will be given an array of single character Strings, each one being a letter to add.
```
```if:swift
The function will be given an `Array<Character>`, each one being a letter to add, and the function will return a Character.
```
```if:kotlin
The function will be given a `List<Char>`, each one being a letter to add, and the function will return a Char.
```
```if:powershell
The function will be given a `char[]`, each one being a letter to add, and the function will return a `char`.
```
```if:rust
The function will be given a `Vec<char>`, each one being a letter to add, and the function will return a char.
```
```if:scala
The function will be given a `List[Char]`, each one being a letter to add, and the function will return a Char.
```
```if:bf
The input will be a zero-terminated string containing letters.
```
```if:fortran
The function will be given fortran character array variable (`CHARACTER(len=1), DIMENSION(:)`) composed of lowercase letters to add together. Return a `CHARACTER(len=1)`.
```
## Notes:
* Letters will always be lowercase.
* Letters can overflow (see second to last example of the description)
* If no letters are given, the function should return `'z'`
```if:fortran
   "No Letters" in Fortran is represented as a blank space, such as `[' ']` or `CHARACTER,DIMENSION(1):: X = ' '`.
```

## Examples:
```javascript
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
```
```php
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
```
```typescript
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
```
```coffeescript
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' # notice the letters overflowing
addLetters() = 'z'
```
```ruby
add_letters('a', 'b', 'c') = 'f'
add_letters('a', 'b') = 'c'
add_letters('z') = 'z'
add_letters('z', 'a') = 'a'
add_letters('y', 'c', 'b') = 'd' # notice the letters overflowing
add_letters() = 'z'
```
```r
add_letters(c('a', 'b', 'c')) = 'f'
add_letters(c('a', 'b')) = 'c'
add_letters(c('z')) = 'z'
add_letters(c('z', 'a')) = 'a'
add_letters(c('y', 'c', 'b')) = 'd' # notice the letters overflowing
add_letters(c()) = 'z'
```
```python
add_letters('a', 'b', 'c') = 'f'
add_letters('a', 'b') = 'c'
add_letters('z') = 'z'
add_letters('z', 'a') = 'a'
add_letters('y', 'c', 'b') = 'd' # notice the letters overflowing
add_letters() = 'z'
```
```factor
{ "a" "b" "c" } add-letters ! "f"
{ "a" "b" } add-letters ! "c"
{ "z" } add-letters ! "z"
{ "z" "a" } add-letters ! "a"
{ "y" "c" "b" } add-letters ! "d" ! notice the letters overflowing
{ } add-letters ! "z"
```
```cpp
add_letters({'a', 'b', 'c'}) = 'f'
add_letters({'a', 'b'}) = 'c'
add_letters({'z'}) = 'z'
add_letters({'z', 'a'}) = 'a'
add_letters({'y', 'c', 'b'}) = 'd' // notice the letters overflowing
add_letters({}) = 'z'
```
```lua
addLetters({'a', 'b', 'c'}) = 'f'
addLetters({'a', 'b'}) = 'c'
addLetters({'z'}) = 'z'
addLetters({'z', 'a'}) = 'a'
addLetters({'y', 'c', 'b'}) = 'd' -- notice the letters overflowing
addLetters({}) = 'z'
```
```nim
addLetters(@['a', 'b', 'c']) = 'f'
addLetters(@['a', 'b']) = 'c'
addLetters(@['z']) = 'z'
addLetters(@['z', 'a']) = 'a'
addLetters(@['y', 'c', 'b']) = 'd' # notice the letters overflowing
addLetters(@[]) = 'z'
```
```powershell
AddLetters(@('a', 'b', 'c')) = 'f'
AddLetters(@('a', 'b')) = 'c'
AddLetters(@('z')) = 'z'
AddLetters(@('z', 'a')) = 'a'
AddLetters(@('y', 'c', 'b')) = 'd' # notice the letters overflowing
AddLetters(@()) = 'z'
```
```rust
add_letters(vec!['a', 'b', 'c']) = 'f'
add_letters(vec!['a', 'b']) = 'c'
add_letters(vec!['z']) = 'z'
add_letters(vec!['z', 'a']) = 'a'
add_letters(vec!['y', 'c', 'b']) = 'd' // notice the letters overflowing
add_letters(vec![]) = 'z'
```
```csharp
AddLetters(new char[] {'a', 'b', 'c'}) = 'f'
AddLetters(new char[] {'a', 'b'}) = 'c'
AddLetters(new char[] {'z'}) = 'z'
AddLetters(new char[] {'z', 'a'}) = 'a'
AddLetters(new char[] {'y', 'c', 'b'}) = 'd' // notice the letters overflowing
AddLetters(new char[] {}) = 'z'
```
```vb
AddLetters(New Char() {"a"C, "b"C, "c"C}) = "f"C
AddLetters(New Char() {"a"C, "b"C}) = "c"C
AddLetters(New Char() {"z"C}) = "z"C
AddLetters(New Char() {"z"C, "a"C}) = "a"C
AddLetters(New Char() {"y"C, "c"C, "b"C}) = "d"C ' notice the letters overflowing
AddLetters(New Char() {}) = "z"C
```
```go
AddLetters([]rune{'a', 'b', 'c'}) = 'f'
AddLetters([]rune{'a', 'b'}) = 'c'
AddLetters([]rune{'z'}) = 'z'
AddLetters([]rune{'z', 'a'}) = 'a'
AddLetters([]rune{'y', 'c', 'b'}) = 'd' // notice the letters overflowing
AddLetters([]rune{}) = 'z'
```
```crystal
add_letters(['a', 'b', 'c']) = 'f'
add_letters(['a', 'b']) = 'c'
add_letters(['z']) = 'z'
add_letters(['z', 'a']) = 'a' # note single quotes, we work with Chars
add_letters(['y', 'c', 'b']) = 'd' # notice the letters overflowing
add_letters([] of Char) = 'z'
```
```elixir
add_letters(["a", "b", "c"]) = "f"
add_letters(["a", "b"]) = "c"
add_letters(["z"]) = "z"
add_letters(["z", "a"]) = "a"
add_letters(["y", "c", "b"]) = "d" # notice the letters overflowing
add_letters([]) = "z"
```
```cfml
addLetters(["a", "b", "c"]) = "f"
addLetters(["a", "b"]) = "c"
addLetters(["z"]) = "z"
addLetters(["z", "a"]) = "a"
addLetters(["y", "c", "b"]) = "d" // notice the letters overflowing
addLetters([]) = "z"
```
```prolog
add_letters([a, b, c]) = f
add_letters([a, b]) = c
add_letters([z]) = z
add_letters([z, a]) = a
add_letters([y, c, b]) = d % notice the letters overflowing
add_letters([]) = z
```
```dart
addLetters(['a', 'b', 'c']) = 'f'
addLetters(['a', 'b']) = 'c'
addLetters(['z']) = 'z'
addLetters(['z', 'a']) = 'a'
addLetters(['y', 'c', 'b']) = 'd' // notice the letters overflowing
addLetters(<String>[]) = 'z'
```
```reason
addLetters([|"a", "b", "c"|]) = "f"
addLetters([|"a", "b"|]) = "c"
addLetters([|"z"|]) = "z"
addLetters([|"z", "a"|]) = "a"
addLetters([|"y", "c", "b"|]) = "d" /* notice the letters overflowing */
addLetters([||]) = "z"
```
```julia
addletters('a', 'b', 'c') = 'f'
addletters('a', 'b') = 'c'
addletters('z') = 'z'
addletters('z', 'a') = 'a' # note single quotes, we work with Chars
addletters('y', 'c', 'b') = 'd' # notice the letters overflowing
addletters() = 'z'
```
```haskell
addLetters ['a', 'b', 'c'] = 'f'
addLetters ['a', 'b'] = 'c'
addLetters ['z'] = 'z'
addLetters ['z', 'a'] = 'a'
addLetters ['y', 'c', 'b'] = 'd' -- notice the letters overflowing
addLetters [] = 'z'
```
```purescript
addLetters ['a', 'b', 'c'] = 'f'
addLetters ['a', 'b'] = 'c'
addLetters ['z'] = 'z'
addLetters ['z', 'a'] = 'a'
addLetters ['y', 'c', 'b'] = 'd' -- notice the letters overflowing
addLetters [] = 'z'
```
```elm
addLetters ['a', 'b', 'c'] = 'f'
addLetters ['a', 'b'] = 'c'
addLetters ['z'] = 'z'
addLetters ['z', 'a'] = 'a'
addLetters ['y', 'c', 'b'] = 'd' -- notice the letters overflowing
addLetters [] = 'z'
```
```c
add_letters(3, {'a', 'b', 'c'}) == 'f'
add_letters(2, {'a', 'b'})      == 'c'
add_letters(1, {'z'})           == 'z'
add_letters(2, {'z', 'a'})      == 'a'
add_letters(3, {'y', 'c', 'b'}) == 'd' // notice letters overflowing
add_letters(0, {})              == 'z'
```
```java
addLetters("a", "b", "c") = "f"
addLetters("a", "b") = "c"
addLetters("z") = "z"
addLetters("z", "a") = "a"
addLetters("y", "c", "b") = "d" // notice the letters overflowing
addLetters() = "z"
```
```kotlin
addLetters(listOf("a", "b", "c")) = "f"
addLetters(listOf("a", "b")) = "c"
addLetters(listOf("z")) = "z"
addLetters(listOf("z", "a")) = "a"
addLetters(listOf("y", "c", "b")) = "d" // notice the letters overflowing
addLetters(listOf()) = "z"
```
```scala
addLetters(List('a', 'b', 'c')) = 'f'
addLetters(List('a', 'b')) = 'c'
addLetters(List('z')) = 'z'
addLetters(List('z', 'a')) = 'a'
addLetters(List('y', 'c', 'b')) = 'd' // notice the letters overflowing
addLetters(List()) = 'z'
```
```swift
addLetters(["a", "b", "c"]) = "f"
addLetters(["a", "b"]) = "c"
addLetters(["z"]) = "z"
addLetters(["z", "a"]) = "a"
addLetters(["y", "c", "b"]) = "d" // notice the letters overflowing
addLetters([]) = "z"
```
```fsharp
addLetters(['a', 'b', 'c']) = 'f'
addLetters(['a', 'b']) = 'c'
addLetters(['z']) = 'z'
addLetters(['z', 'a']) = 'a'
addLetters(['y', 'c', 'b']) = 'd' // notice the letters overflowing
addLetters([]) = 'z'
```
```objc
addLetters({'a', 'b', 'c'}, 3) = 'f'
addLetters({'a', 'b'}, 2) = 'c'
addLetters({'z'}, 1) = 'z'
addLetters({'z', 'a'}, 2) = 'a'
addLetters({'y', 'c', 'b'}, 3) = 'd' // notice the letters overflowing
addLetters({}, 0) = 'z'
```
```sql
table(letter: ["a", "b", "c"]) = "f"
table(letter: ["a", "b"]) = "c"
table(letter: ["z"]) = "z"
table(letter: ["z", "a"]) = "a"
table(letter: ["y", "c", "b"]) = "d" -- notice the letters overflowing
table(letter: []) = "z"
```
```groovy
addLetters(["a", "b", "c"]) = "f"
addLetters(["a", "b"]) = "c"
addLetters(["z"]) = "z"
addLetters(["z", "a"]) = "a"
addLetters(["y", "c", "b"]) = "d" // notice the letters overflowing
addLetters([]) = "z"
```
```shell
run_shell(args: ['abc']) = "f"
run_shell(args: ['ab']) = "c"
run_shell(args: ['z']) = "z"
run_shell(args: ['za']) = "a"
run_shell(args: ['ycb']) = "d" # notice the letters overflowing
run_shell(args: ['']) = "z"
```
```racket
(add-letters '(#\a #\b #\c)) ; #\f
(add-letters '(#\z)) ; #\z
(add-letters '(#\a #\b)) ; #\c
(add-letters '(#\c)) ; #\c
(add-letters '(#\z #\a)) ; #\a
(add-letters '(#\y #\c #\b)) ; #\d ; notice the letters overflowing
(add-letters '()) ; #\z
```
```clojure
(add-letters [\a \b \c]) ;; \f
(add-letters [\z]) ;; \z
(add-letters [\a \b]) ;; \c
(add-letters [\c]) ;; \c
(add-letters [\z \a]) ;; \a
(add-letters [\y \c \b]) ;; \d ;; notice the letters overflowing
(add-letters []) ;; \z
```
```bf
runBF('abc\0') == 'f'
runBF('ab\0') == 'c'
runBF('z\0') == 'z'
runBF('za\0') == 'a'
runBF('ycb\0') == 'd' // notice the letters overflowing
runBF('\0') == 'z'
```
```fortran
addLetters(['a', 'b', 'c'] = 'f'
addLetters(['a', 'b']) = 'c'
addLetters(['z']) = 'z'
addLetters(['z', 'a']) = 'a'
addLetters(['y', 'c', 'b']) = 'd' // notice the letters overflowing
addLetters([' ']) = 'z'
```
```haxe
addLetters(["a", "b", "c"]) = "f"
addLetters(["a", "b"]) = "c"
addLetters(["z"]) = "z"
addLetters(["z", "a"]) = "a"
addLetters(["y", "c", "b"]) = "d" // notice the letters overflowing
addLetters([]) = "z"
```

Confused? Roll your mouse/tap over <abbr title="Start by converting the letters to numbers, a => 1, b => 2, etc. Add them up. Think about the overflow yourself. Once that's done, convert it back to a letter.">here</abbr>
