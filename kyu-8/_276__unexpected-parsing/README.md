# Unexpected parsing

**Rank:** 8 kyu  
**Category:** bug_fixes  
**URL:** [https://www.codewars.com/kata/54fdaa4a50f167b5c000005f](https://www.codewars.com/kata/54fdaa4a50f167b5c000005f)

---

## 📝 Description

Here is a piece of code:
```javascript
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}
```

```python
def get_status(is_busy):
    status = "busy" if is_busy else "available"
    return status
```

```ruby
def get_status(is_busy)
    status = is_busy ? "busy" : "available"
    return status
end
```

```java
public class Kata {

    public static HashMap <String, String> getStatus(boolean isBusy) {
        HashMap<String, String> status;
      
        if (isBusy) {
          status = "busy";
        } else {
          status = "available";
        }

        return status;
    }
}
```


## Expected Behaviour
Function should return a dictionary/Object/Hash with `"status"` as a key, whose value can : `"busy"` or `"available"` depending on the truth value of the argument `is_busy`.

But as you will see after clicking `RUN` or `ATTEMPT` this code has several bugs, please fix them.
