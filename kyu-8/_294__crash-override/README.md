# Crash Override

**Rank:** 8 kyu  
**Category:** reference  
**URL:** [https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f](https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f)

---

## 📝 Description

<img src="https://media.giphy.com/media/13AN8X7jBIm15m/giphy.gif" style="width:463px;height:200px;">

Every budding hacker needs an alias! `The Phantom Phreak`, `Acid Burn`, `Zero Cool` and `Crash Override` are some notable examples from the film `Hackers`.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

#### Notes:
* Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

* If the first character of either of the names given to the function is not a letter from `A - Z`, you should return `"Your name must start with a letter from A - Z."`

* Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

---

## Examples

```javascript
// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
```

```ruby
# These two hashes are preloaded, you need to use them in your code
FIRST_NAME = {'A': 'Alpha', 'B': 'Beta', 'C': 'Cache', ...}
SURNAME = {'A': 'Analogue', 'B': 'Bomb', 'C': 'Catalyst' ...}

alias_gen('Larry', 'Brentwood') == 'Logic Bomb'
alias_gen('123abc', 'Petrovic') == 'Your name must start with a letter from A - Z.'
```
```python
# These two dictionaries are preloaded, you need to use them in your code
FIRST_NAME = {'A': 'Alpha', 'B': 'Beta', 'C': 'Cache', ...}
SURNAME = {'A': 'Analogue', 'B': 'Bomb', 'C': 'Catalyst' ...}

alias_gen('Larry', 'Brentwood') == 'Logic Bomb'
alias_gen('123abc', 'Petrovic') == 'Your name must start with a letter from A - Z.'
```

```csharp
FirstName = {{"A", "Alpha"}, {"B", "Beta"}, {"C", "Cache"}, ...}
Surname = {{"A", "Analogue"}, {"B", "Bomb"}, {"C", "Catalyst"} ...}

// These dictionaries are defined on other partial Kata class

AliasGen('Larry', 'Brentwood') == 'Logic Bomb'
AliasGen('123abc', 'Petrovic') == 'Your name must start with a letter from A - Z.'
```

```scala
// These two maps are preloaded, you need to use them in your code

val forenames = Map('A' -> "Alpha", 'B' -> "Beta", 'C' -> "Cache", ...)
val surnames = Map('A' -> "Analogue", 'B' -> "Bomb", 'C' -> "Catalyst", ...)

aliasGen("Larry", "Brentwood") == "Logic Bomb"
aliasGen("123abc", "Petrovic") == "Your name must start with a letter from A - Z."
```

Happy hacking!
